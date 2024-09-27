<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Eracolumns = [
  {  
    title: 'PMID',
    key: 'PMID',
  },
  {
    title: 'Exercise risk evaluation',
    key: 'Exercise risk evaluation',
  },
  {
    title: 'Method',
    key: 'Method',
  },
];




export default defineComponent({
  setup() {
    const era_data = ref([]);
    onMounted(async () => {
      console.log("开始读取Era");

      const M_response = await fetch('/depression_pa_kb/data/Era_0712.json');
      era_data.value = await M_response.json();

      console.log("结束读取Era");
    });

    return {
      era_data,
      era_columns: Eracolumns,
      pagination: {
        pageSize: 20
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Exercise risk assessment</h2> -->
<n-gradient-text :size="48" type="info">
  Exercise risk assessment
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="era_columns"
    :data="era_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>