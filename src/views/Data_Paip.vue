<script lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { defineComponent, ref , h , onMounted} from 'vue'
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

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
  PMID: number;
};

const create_PaipColumns = ({
  Detail
}: {
  Detail: (row: PaipType) => void
}): DataTableColumns<PaipType> => {
  return [
    {  
        title: 'PMID',
        key: 'PMID',
    },
    {
        title: 'Protocol number',
        key: 'ProtocolNumber',
    },
    {
        title: 'Protocol name',
        key: 'ProtocolName',
    },
    // {
    //     title: 'Classification',
    //     key: 'Classification',
    // },
    {
        title: 'Frequency[times(days)/week]',
        key: 'Frequency',
    },
    {
        title: 'Intensity',
        key: 'Intensity',
    },
    {
        title: 'Intensity calculation indicator(score)',
        key: 'IntensityCalculationIndicator',
    },
    {
        title: 'Times[min/session(day)]',
        key: 'TimesPerSession',
    },
    {
        title: 'Type',
        key: 'Type',
    },
    {
        title: 'Volume(min/week)',
        key: 'Volume',
    },
    {
        title: 'Periods of time',
        key: 'PeriodsOfTime',
    },
    // {
    //     title: 'Warm-up',
    //     key: 'WarmUp',
    // },
    // {
    //     title: 'Cool-down',
    //     key: 'CoolDown',
    // },
    {
        title: 'Number of sets per session(day)',
        key: 'NumberOfSetsPerSession',
    },
    {
        title: 'Time of each set',
        key: 'TimeOfEachSet',
    },
    {
        title: 'Repetitions per set',
        key: 'RepetitionsPerSet',
    },
    {
        title: 'Progress',
        key: 'Progress',
    },
    {
        title: 'Intertrial interval (seconds)',
        key: 'IntertrialInterval',
    },
    {
        title: 'Duration (weeks)',
        key: 'Duration',
    },
    // {
    //     title: 'Medical supervision (YES/NA)',
    //     key: 'MedicalSupervision',
    // },
    // {
    //     title: 'Exercise contraindications',
    //     key: 'ExerciseContraindications',
    // },
    // {
    //     title: 'Combination therapy',
    //     key: 'CombinationTherapy',
    // },
    // {
    //     title: 'Protocol',
    //     key: 'Protocol',
    // },
    {
      title: 'Detail',
      key: 'detail',
      render (row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            round: true,
            color: '#1890ff',
            onClick: () => Detail(row)
          },
          { default: () => 'Detail' }
        )
      }
    }
  ]
};



// const Paipcolumns = [
//   {  
//     title: 'PMID',
//     key: 'PMID',
//   },
//   {
//     title: 'Protocol number',
//     key: 'Protocol number',
//   },
//   {
//     title: 'Protocol name',
//     key: 'Protocol name',
//   },
//   {
//     title: 'Classification',
//     key: 'Classification',
//   },
//   {
//     title: 'Frequency[times(days)/week]',
//     key: 'Frequency[times(days)/week]',
//   },
//   {
//     title: 'Intensity',
//     key: 'Intensity',
//   },
//   {
//     title: 'Intensity calculation indicator(score)',
//     key: 'Intensity calculation indicator(score)',
//   },
//   {
//     title: 'Times[min/session(day)]',
//     key: 'Times[min/session(day)]',
//   },
//   {
//     title: 'Type',
//     key: 'Type',
//   },
//   {
//     title: 'Volume(min/week)',
//     key: 'Volume(min/week)',
//   },
//   {
//     title: 'Periods of time',
//     key: 'Periods of time',
//   },
//   {
//     title: 'Warm-up',
//     key: 'Warm-up',
//   },
//   {
//     title: 'Cool-down',
//     key: 'Cool-down',
//   },
//   {
//     title: 'Number of sets per session(day)',
//     key: 'Number of sets per session(day)',
//   },
//   {
//     title: 'Time of each set',
//     key: 'Time of each set',
//   },
//   {
//     title: 'Repetitions per set',
//     key: 'Repetitions per set',
//   },
//   {
//     title: 'Progress',
//     key: 'Progress',
//   },
//   {
//     title: 'Intertrial interval (seconds)',
//     key: 'Intertrial interval (seconds)',
//   },
//   {
//     title: 'Duration (weeks)',
//     key: 'Duration (weeks)',
//   },
//   {
//     title: 'Medical supervision (YES/NA)',
//     key: 'Medical supervision (YES/NA)',
//   },
//   {
//     title: 'Exercise contraindications',
//     key: 'Exercise contraindications',
//   },
//   {
//     title: 'Combination therapy',
//     key: 'Combination therapy',
//   },
//   {
//     title: 'Protocol',
//     key: 'Protocol',
//   },
// ];






export default defineComponent({
  setup() {
    const paip_data = ref([]);
    const router = useRouter();

    onMounted(async () => {
      console.log("开始读取Paip");

      const M_response = await fetch('/depression_pa_kb/data/Paip_0911.json');
      paip_data.value = await M_response.json();

      console.log("结束读取Paip");
    });

    return {
      paip_data,
    //   paip_columns: Paipcolumns,
      paip1_colums: create_PaipColumns({
                Detail(row: PaipType) {
                    router.push({ name: 'Detail', query: { row: JSON.stringify(row) } });
                }
            }),
      pagination: {
        pageSize: 10
      }
    }
  },
})

</script>


<template>
<!-- <h2 style="text-align: center;">Physical activity intervention protocol</h2> -->
<n-gradient-text :size="48" type="info">
  Physical activity intervention protocol
</n-gradient-text>
<!-- <n-card>
    <n-data-table
    :columns="paip_columns"
    :data="paip_data"
    max-height="360px"
    :pagination="pagination"
    />
</n-card> -->

    <p style="color: gray; font-size: 1em;text-align: center;">
        （Only part of the exercise protocol, to see the full protocol please click on the detail with the same protocol number）
    </p>
<n-card>
    <n-data-table
    :columns="paip1_colums"
    :data="paip_data"
    max-height="2000px"
    :pagination="pagination"
    />
</n-card>

</template>