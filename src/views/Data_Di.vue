<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Dicolumns = [
  {
    title: 'PMID',
    key: 'PMID',
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
    title: 'Scale scores(statistical indicators)',
    key: 'Scale scores(statistical indicators)',
  },
  {
    title: 'Scale scores(values)',
    key: 'Scale scores(values)',
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
    title: 'Comorbidity(mental disease)',
    key: 'Comorbidity(mental disease)',
  },
  {
    title: 'Underlying diseases',
    key: 'Underlying diseases',
  }
];

export default defineComponent({
  setup() {
    const di_data = ref([]);
    onMounted(async () => {
      console.log("开始读取DI");

      const M_response = await fetch('/depression_pa_kb/data/Di_0712.json');
      di_data.value = await M_response.json();

      console.log("结束读取DI");
    });

    return {
      di_data,
      di_columns: Dicolumns,
      pagination: {
        pageSize: 20,
      }
    }
  },
})

</script>


<template>
<n-gradient-text :size="48" type="info">
    Depression information
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="di_columns"
    :data="di_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>