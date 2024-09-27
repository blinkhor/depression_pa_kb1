<script lang="ts">
import { defineComponent, ref , onMounted} from 'vue'


const Bicolumns = [
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
    title: 'S-Value',
    key: 'S-Value',
  },
  {
    title: 'Method',
    key: 'Method',
  },
];


export default defineComponent({
  setup() {
    const bi_data = ref([]);
    onMounted(async () => {
      console.log("开始读取BI");

      const M_response = await fetch('/depression_pa_kb/data/Bi_0712.json');
      bi_data.value = await M_response.json();

      console.log("结束读取BI");
    });

    return {
      bi_data,
      bi_columns: Bicolumns,
      pagination: {
        pageSize: 20
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Baseline information</h2> -->
<n-gradient-text :size="48" type="info">
  Baseline information
</n-gradient-text>
<n-card>
    <n-data-table
    :columns="bi_columns"
    :data="bi_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>