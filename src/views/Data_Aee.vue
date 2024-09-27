<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Aeecolumns = [
  {  
    title: 'PMID',
    key: 'PMID',
  },    
  {
    title: 'Protocol name',
    key: 'Protocol name',
  },
  {
    title: 'Adverse events classification',
    key: 'Adverse events classification',
  },
  {
    title: 'Adverse events',
    key: 'Adverse events',
  },
  {
    title: 'Adverse events definition/content',
    key: 'Adverse events definition/content',
  },
  {
    title: 'Prevention protocol',
    key: 'Prevention protocol',
  },
  {
    title: 'Conclusion',
    key: 'Conclusion',
  },
];



export default defineComponent({
  setup() {
    const aee_data = ref([]);
    onMounted(async () => {
      console.log("开始读取Aee");

      const M_response = await fetch('/depression_pa_kb/data/Aee_0712.json');
      aee_data.value = await M_response.json();

      console.log("结束读取Aee");
    });

    return {
      aee_data,
      aee_columns: Aeecolumns,
      pagination: {
        pageSize: 20
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Adverse events evaluation</h2> -->
<n-gradient-text :size="48" type="info">
  Adverse events evaluation
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="aee_columns"
    :data="aee_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>