// @ts-nocheck
<template>
  <n-gradient-text :size="60" type="info">
    PE_detail
  </n-gradient-text>
  <div>
    <h1>Matched PMIDs</h1>
    <!-- 判断 pmids 是否为空或者是否为 null -->
    <ul v-if="pmids && pmids.length > 0">
      <li v-for="pmid in pmids" :key="pmid">{{ pmid }}</li>
    </ul>
    <!-- 如果 pmids 为空或为 null，显示提示信息 -->
    <p v-else>No matched PMIDs found.</p>
  </div>

  <n-card>
    <n-data-table
      :columns="paip1_columns"
      :data="filteredData"
      max-height="700px"
      :pagination="pagination"
    />
  </n-card>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui';
import { ref, h, onMounted, computed } from 'vue';
import { NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

// 定义 props
const props = defineProps({
  pmids: {
    type: Array,
    default: () => [],
  },
});

console.log('Received PMIDs:', props.pmids);

// 定义响应式数据
const pmids = props.pmids as string[];

const paip_data = ref([]);
const router = useRouter();

// 定义表格的列配置类型
type PaipType = {
  ProtocolNumber: number;
  ProtocolName: string;
  Classification: string;
  Frequency: number;
  Intensity: string;
  IntensityCalculationIndicator: string;
  TimesPerSession: number;
  Type: string;
  Volume: number;
  PeriodsOfTime: string;
  WarmUp: string;
  CoolDown: string;
  NumberOfSetsPerSession: string;
  TimeOfEachSet: string;
  RepetitionsPerSet: string;
  Progress: string;
  IntertrialInterval: string;
  Duration: string;
  MedicalSupervision: string;
  ExerciseContraindications: string;
  CombinationTherapy: string;
  Protocol: string;
  Scores: number;
  PMID: number | string; // 允许 PMID 为字符串或数字
};

// 创建表格列的函数
const create_PaipColumns = ({
  Detail,
}: {
  Detail: (row: PaipType) => void;
}): DataTableColumns<PaipType> => {
  return [
    { title: 'PMID', key: 'PMID' },
    // { title: 'Protocol number', key: 'ProtocolNumber' },
    // { title: 'Protocol name', key: 'ProtocolName' },
    // { title: 'Classification', key: 'Classification' },
    // { title: 'Frequency[times(days)/week]', key: 'Frequency' },
    // { title: 'Intensity', key: 'Intensity' },
    // { title: 'Intensity calculation indicator(score)', key: 'IntensityCalculationIndicator' },
    // { title: 'Times[min/session(day)]', key: 'TimesPerSession' },
    // { title: 'Type', key: 'Type', show: 'false'},
    // { title: 'Volume(min/week)', key: 'Volume' },
    // { title: 'Periods of time', key: 'PeriodsOfTime' },
    // { title: 'Warm-up', key: 'WarmUp' },
    // { title: 'Cool-down', key: 'CoolDown' },
    // { title: 'Number of sets per session(day)', key: 'NumberOfSetsPerSession' },
    // { title: 'Time of each set', key: 'TimeOfEachSet' },
    // { title: 'Repetitions per set', key: 'RepetitionsPerSet' },
    // { title: 'Progress', key: 'Progress' },
    // { title: 'Intertrial interval (seconds)', key: 'IntertrialInterval' },
    // { title: 'Duration (weeks)', key: 'Duration' },
    // { title: 'Medical supervision (YES/NA)', key: 'MedicalSupervision' },
    // { title: 'Exercise contraindications', key: 'ExerciseContraindications' },
    // { title: 'Combination therapy', key: 'CombinationTherapy' },
    { title: 'Scores', key: 'Scores' },
    { title: 'Protocol', key: 'Protocol' },
    {
      title: 'Detail',
      key: 'detail',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            round: true,
            color: '#1890ff',
            onClick: () => Detail(row),
          },
          { default: () => 'Detail' }
        );
      },
    },
  ];
};

// 表格的分页配置
const pagination = { pageSize: 10 };

// 使用 onMounted 钩子进行数据请求
onMounted(async () => {
  console.log('开始读取Paip');
  try {
    const M_response = await fetch('/depression_pa_kb/data/Paip_0911.json');
    if (!M_response.ok) {
      throw new Error('Failed to fetch Paip data');
    }
    paip_data.value = await M_response.json();
    console.log('读取的Paip数据：', paip_data.value);
  } catch (error) {
    console.error('读取数据时出错:', error);
  }
  console.log('结束读取Paip');
});

// 创建表格列配置
const paip1_columns = create_PaipColumns({
  Detail(row: PaipType) {
    router.push({ name: 'Detail', query: { row: JSON.stringify(row) } });
  },
});

// 使用 computed 进行筛选
const filteredData = computed(() => {
  // 筛选 paip_data 中的行，只保留与 props.pmids 匹配的行
  const pmidsSet = new Set(props.pmids.map(pmid => pmid.toString())); // 将 pmids 转为字符串 Set
  const filtered = paip_data.value.filter(row => {
    const rowPmid = row.PMID.toString(); // 确保 row 的 PMID 也转换为字符串
    const isMatched = pmidsSet.has(rowPmid); // 检查是否匹配
    // console.log(`Checking PMID: ${rowPmid} - Matched: ${isMatched}`); // 输出调试信息
    return isMatched;
  });

  filtered.sort((a, b) => Number(b.Scores) - Number(a.Scores));

  console.log('Filtered Data:', filtered); // 输出筛选后的数据
  return filtered;
});

// 监控数据加载
// watch(paip_data, (newData) => {
//   console.log('Data loaded:', newData);
// });

// watch(filteredData, (newFilteredData) => {
//   console.log('Filtered data updated:', newFilteredData);
// });
</script>

<style scoped>
.n-gradient-text {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #d5e3d4, #56ab2f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
