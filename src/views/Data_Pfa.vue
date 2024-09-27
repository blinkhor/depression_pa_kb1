<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Pfacolumns = [
  {
    title: 'PMID',
    key: 'PMID',
  },
  {
    title: 'Group name',
    key: 'Group name',
  },
  {
    title: 'Content',
    key: 'Content',
  },
  {
    title: 'Variable name',
    key: 'Variable name',
  },
  {
    title: 'Variable type',
    key: 'Variable type',
  },
  {
    title: 'Classification',
    key: 'Classification',
  },
  {
    title: 'Statistical indicators',
    key: 'Statistical indicators',
  },
  {
    title: 'Value',
    key: 'Value',
  },
  {
    title: 'Unit',
    key: 'Unit',
  },
  {
    title: 'Method',
    key: 'Method',
  },
];



export default defineComponent({
  setup() {
    const pfa_data = ref([]);
    onMounted(async () => {
      console.log("开始读取Pfa");

      const M_response = await fetch('/depression_pa_kb/data/Pfa_0712.json');
      pfa_data.value = await M_response.json();

      console.log("结束读取Pfa");
    });

    return {
      pfa_data,
      pfa_columns: Pfacolumns,
      pagination: {
        pageSize: 10
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Physical fitness assessment</h2> -->
<n-gradient-text :size="48" type="info">
  Physical fitness assessment
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="pfa_columns"
    :data="pfa_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>