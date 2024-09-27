<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search..." @input="searchTable" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in filteredPeople" :key="index">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  interface Person {
    name: string;
    age: number;
    location: string;
  }
  
  export default defineComponent({
    name: 'SearchableTable',
    setup() {
      const searchQuery = ref('');
      const people = ref<Person[]>([
        { name: 'John', age: 25, location: 'New York' },
        { name: 'Alice', age: 30, location: 'London' },
        // 更多数据
      ]);
  
      const filteredPeople = computed(() => {
        if (!searchQuery.value) {
          return people.value;
        }
        const query = searchQuery.value.toLowerCase();
        return people.value.filter(person =>
          person.name.toLowerCase().includes(query) ||
          person.age.toString().includes(query) ||
          person.location.toLowerCase().includes(query)
        );
      });
  
      const searchTable = () => {
        // 此处可以添加额外的搜索逻辑
      };
  
      return {
        searchQuery,
        filteredPeople,
        searchTable,
      };
    },
  });
  </script>
  
  <style scoped>
  input {
    padding: 5px;
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
  