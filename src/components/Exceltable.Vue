<template>
    <div>
      <input type="file" @change="handleFileUpload" />
      <table v-if="tableData.length > 0">
        <thead>
          <tr>
            <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import * as XLSX from 'xlsx';
  
  export default defineComponent({
    name: 'ExcelTable',
    setup() {
      const tableData = ref<any[]>([]);
      const tableHeaders = ref<string[]>([]);
  
      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) return;
  
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target?.result;
          if (data) {
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            tableHeaders.value = jsonData[0] as string[];
            tableData.value = jsonData.slice(1);
          }
        };
        reader.readAsBinaryString(file);
      };
  
      return {
        handleFileUpload,
        tableData,
        tableHeaders,
      };
    },
  });
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  