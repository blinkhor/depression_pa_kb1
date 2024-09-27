<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute();
    const row = route.query.row ? JSON.parse(route.query.row as string) : null;
    
    // 调试信息
    console.log('Row data:', row);

    return {
      row
    };
  }
})
</script>

<template>
    <div>
      <h2>Detail</h2>
      <n-table :bordered="true" :single-line="false" v-if="row">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PMID:</td>
            <td class="center-text">{{ row.PMID }}</td>
          </tr>
          <tr>
            <td>Protocol number:</td>
            <td class="center-text">{{ row.ProtocolNumber }}</td>
          </tr>
          <tr>
            <td>Protocol name:</td>
            <td class="center-text">{{ row.ProtocolName }}</td>
          </tr>
          <tr>
            <td>Classification:</td>
            <td class="center-text">{{ row.Classification }}</td>
          </tr>
          <tr>
            <td>Frequency[times(days)/week]:</td>
            <td class="center-text">{{ row.Frequency }}</td>
          </tr>
          <tr>
            <td>Intensity:</td>
            <td class="center-text">{{ row['Intensity '] ? row['Intensity '] : 'Intensity data is missing' }}</td>
          </tr>
          <tr>
            <td>Intensity calculation indicator(score):</td>
            <td class="center-text">{{ row.IntensityCalculationIndicator }}</td>
          </tr>
          <tr>
            <td>Times[min/session(day)]:</td>
            <td class="center-text">{{ row.TimesPerSession }}</td>
          </tr>
          <tr>
            <td>Type:</td>
            <td class="center-text">{{ row.Type }}</td>
          </tr>
          <tr>
            <td>Volume(min/week):</td>
            <td class="center-text">{{ row.Volume }}</td>
          </tr>
          <tr>
            <td>Periods of time:</td>
            <td class="center-text">{{ row.PeriodsOfTime }}</td>
          </tr>
          <tr>
            <td>Warm-up:</td>
            <td class="center-text">{{ row.WarmUp }}</td>
          </tr>
          <tr>
            <td>Cool-down:</td>
            <td class="center-text">{{ row.CoolDown }}</td>
          </tr>
          <tr>
            <td>Number of sets per session(day):</td>
            <td class="center-text">{{ row.NumberOfSetsPerSession }}</td>
          </tr>
          <tr>
            <td>Time of each set:</td>
            <td class="center-text">{{ row.TimeOfEachSet }}</td>
          </tr>
          <tr>
            <td>Repetitions per set:</td>
            <td class="center-text">{{ row.RepetitionsPerSet }}</td>
          </tr>
          <tr>
            <td>Progress:</td>
            <td class="center-text">{{ row.Progress }}</td>
          </tr>
          <tr>
            <td>Intertrial interval (seconds):</td>
            <td class="center-text">{{ row.IntertrialInterval }}</td>
          </tr>
          <tr>
            <td>Duration (weeks):</td>
            <td class="center-text">{{ row.Duration }}</td>
          </tr>
          <tr>
            <td>Medical supervision (YES/NA):</td>
            <td class="center-text">{{ row.MedicalSupervision }}</td>
          </tr>
          <tr>
            <td>Exercise contraindications:</td>
            <td class="center-text">{{ row.ExerciseContraindications }}</td>
          </tr>
          <tr>
            <td>Combination therapy:</td>
            <td class="center-text">{{ row.CombinationTherapy }}</td>
          </tr>
          <tr>
            <td>Protocol:</td>
            <td class="center-text">{{ row.Protocol }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>
</template>

<style scoped>
.n-gradient-text {
  font-size: 24px; /* 增大字号 */
  font-weight: bold; /* 加粗 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 20px; /* 与下方元素的间距 */
  background: linear-gradient(90deg, #D5E3D4, #56ab2f); /* 浅绿色渐变色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* 渐变文字颜色 */
}
.center-text {
  text-align: center;
}
</style>