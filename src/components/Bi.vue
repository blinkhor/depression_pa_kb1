<script lang="ts">
// import type { DataTableColumns } from 'naive-ui'
import { defineComponent, ref , onMounted} from 'vue'

const Dicolumns = [
  {
    title: 'S-NO',
    key: 'S-NO',
  },
  {
    title: 'Group name',
    key: 'Group name',
  },
  {
    title: 'Depressive disorders classification',
    key: 'Depressive disorders classification',
  },
  {
    title: 'Diagnostic criteria',
    key: 'Diagnostic criteria',
  },
  {
    title: 'Depressive symptom degree',
    key: 'Depressive symptom degree',
  },
  {
    title: 'Rating scale',
    key: 'Rating scale',
  },
  {
    title: 'Scale scores (statistical indicators)',
    key: 'Scale scores (statistical indicators)',
  },
  {
    title: 'Scale scores (values)',
    key: 'Scale scores (values)',
  },
  {
    title: 'Treatment protocol',
    key: 'Treatment protocol',
  },
  {
    title: 'Drug name',
    key: 'Drug name',
  },
  {
    title: 'Comorbidity (mental disease)',
    key: 'Comorbidity (mental disease)',
  },
  {
    title: 'Underlying diseases',
    key: 'Underlying diseases',
  },
];


export default defineComponent({
  setup() {
    const di_data = ref([]);
    onMounted(async () => {
      console.log("开始读取BI");

      const Di_response = await fetch('/data/Di_0517.json');
      di_data.value = await Di_response.json();

      console.log("结束读取BI");
    });

    return {
      di_data,
      di_columns: Dicolumns,
      pagination: { pageSize: 10, pageSlot:9 },
    }
  },
})

</script>


<template>

    <n-data-table
        remote
        :columns="di_columns"
        :data="di_data"
        max-height="300px"
        :pagination="pagination"
        />

</template>