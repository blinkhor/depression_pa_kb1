<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Paeecolumns = [
  {  
    title: 'PMID',
    key: 'PMID',
  },    
  {
    title: 'Protocol number',
    key: 'Protocol number',
  },
  {
    title: 'Protocol name',
    key: 'Protocol name',
  },
  {
    title: 'Intervention time',
    key: 'Intervention time',
  },
  {
    title: 'Follow-up period',
    key: 'Follow-up period',
  },
  {
    title: 'Classification of effect',
    key: 'Classification of effect',
  },
  {
    title: 'Indicators',
    key: 'Indicators',
  },
  {
    title: 'P value',
    key: 'P value',
  },
  {
    title: 'Control  ',
    key: 'Control  ',
  },
  {
    title: 'Results',
    key: 'Results',
  },
  {
    title: 'Conclusion',
    key: 'Conclusion',
  },
];








export default defineComponent({
  setup() {
    const paee_data = ref([]);
    onMounted(async () => {
      console.log("开始读取Paee");

      const M_response = await fetch('/depression_pa_kb/data/Paee_0712.json');
      paee_data.value = await M_response.json();

      console.log("结束读取Paee");
    });

    return {
      paee_data,
      paee_columns: Paeecolumns,
      pagination: {
        pageSize: 20
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Physical activity effect evaluation</h2> -->
<n-gradient-text :size="48" type="info">
  Physical activity effect evaluation
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="paee_columns"
    :data="paee_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>