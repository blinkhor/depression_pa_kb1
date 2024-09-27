<script lang="ts">
import { defineComponent, onMounted, nextTick} from 'vue'
import echarts from "../../echarts";

export default defineComponent({
  setup() {
    onMounted(async () => {
      // 等待 DOM 更新完成，确保元素已渲染
      await nextTick();


      var option = {
        title: {
          text: 'Physical activity effect evaluation (records≥10)',
          left: 'center'  // 标题居中
        },
        grid: {
          bottom: 200  // 增加底部距离，单位是像素
        },
        xAxis: {
          type: 'category',
          data: [
            'Severity of depressive symptoms',
            'Severity of anxiety symptoms',
            'Quality of life',
            'Cardiorespiratory fitness',
            'Cognitive function',
            'Mental health',
            'Neuroendocrine effects',
            'Sleep quality',
            'Muscular fitness',
            'Balance',
            'Response, remission rates from depression',
            'Mood states',
            'Cardiovascular risk factors',
            'Stress level',
            'Severity of underlying diseases',
            'Functional fitness',
            'Happiness levels',
            'Flexibility',
            'Level of physical activity',
            'Inflammatory parameters',
            'Comprehensive physical fitness',
            'General health indices',
            'Body composition'
          ],
          axisLabel: {
            interval: 0,  // 强制显示所有标签
            rotate: 45,   // 标签旋转45度
            align: 'right',
            verticalAlign: 'middle',
            padding: [0, 0, 10, 0],
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true  // 显示Y轴标签
          }
        },
        series: [
          {
            data: [
              514, 126, 116, 97, 65, 53, 50, 45, 43, 32, 32, 29, 28, 28, 25, 23, 22,
              19, 16, 15, 11, 11, 10
            ],
            type: 'bar',
            label: {
              show: true,
              position: 'top'  // 显示在柱子上方
            }
          }
        ]
      };

      var option2 = {
        title: {
          text: 'Underlying Diseases',
          left: 'center'  // 标题居中
        },
        grid: {
          bottom: 200  // 增加底部距离，单位是像素
        },
        xAxis: {
          type: 'category',
          data: [
            'Neurological disorders', 'Any type of cancer', 'Cardiovascular disease', 'Stroke', 
            'End-stage renal disease', 'Diabetes', 'Chronic pain', 'Autoimmune disease', 
            'Overweight or obese', 'HIV', 'Musculoskeletal injury', 'Substance abuse', 
            'Chronic breathing disorders', 'Hypertension', 'Chronic fatigue syndrome', 
            'Chronic physical illness', 'Covid-19', 'Metabolic syndrome', 
            'Perimenopausal syndrome', 'Menstrual irregularities', 
            'Premenstrual syndrome', 'Transitional frail elders'
          ],
          axisLabel: {
            interval: 0,  // 强制显示所有标签
            rotate: 45,   // 标签旋转45度
            align: 'right',
            verticalAlign: 'middle',
            padding: [0, 0, 10, 0],
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true  // 显示Y轴标签
          }
        },
        series: [
          {
            data: [
              30, 29, 22, 17, 13, 12, 9, 8, 7, 6, 6, 5, 4, 3, 2, 2, 2, 2, 2, 1, 1, 1
            ],
            type: 'bar',
            label: {
              show: true,
              position: 'top'  // 显示在柱子上方
            }
          }
        ]
      };

      var option3 = {
        title: {
            text: 'Global Data Distribution',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 1,
            max: 150,
            left: 'left',
            top: 'bottom',
            text: ['High', 'Low'],
            calculable: true,
            inRange: {
              color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
        },
        series: [
        {
            name: 'Data',
            type: 'map',
            map: 'World', // This should match the name registered in echarts.registerMap
            roam: true,
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {name: 'United States', value: 141},
                {name: 'Germany', value: 38},
                {name: 'Brazil', value: 31},
                {name: 'India', value: 32},
                {name: 'Iran', value: 26},
                {name: 'Republic of Korea', value: 26},
                {name: 'China', value: 24},
                {name: 'Sweden', value: 19},
                {name: 'Canada', value: 20},
                {name: 'Australia', value: 17},
                {name: 'United Kingdom', value: 17},
                {name: 'Turkey', value: 16},
                {name: 'Spain', value: 16},
                {name: 'Denmark', value: 14},
                {name: 'Taiwan, China', value: 14},
                {name: 'Switzerland', value: 13},
                {name: 'Hong Kong, China', value: 11},
                {name: 'Italy', value: 10},
                {name: 'Poland', value: 8},
                {name: 'Japan', value: 8},
                {name: 'Kingdom of Saudi Arabia', value: 7},
                {name: 'Norway', value: 7},
                {name: 'Portugal', value: 6},
                {name: 'France', value: 6},
                {name: 'Belgium', value: 4},
                {name: 'The Netherlands', value: 4},
                {name: 'Indonesia', value: 3},
                {name: 'Croatia', value: 3},
                {name: 'Thailand', value: 3},
                {name: 'South Africa', value: 2},
                {name: 'Ireland', value: 2},
                {name: 'Finland', value: 2},
                {name: 'Greece', value: 2},
                {name: 'Bahrain', value: 1},
                {name: 'Nigeria', value: 1},
                {name: 'Cyprus', value: 1},
                {name: 'California', value: 1},
                {name: 'Mexico', value: 1},
                {name: 'Qatar', value: 1},
                {name: 'Kuwait', value: 1},
                {name: 'Kenya', value: 1},
                {name: 'Zambia', value: 1},
                {name: 'Malawi', value: 1},
                {name: 'Iceland', value: 1},
                {name: 'Jordan', value: 1},
                {name: 'Malaysia', value: 1},
                {name: 'Egypt', value: 1},
                {name: 'Israel', value: 1},
                {name: 'Colombia', value: 1},
                {name: 'Estonia', value: 1},
                {name: 'Russia', value: 1},
                {name: 'Lithuania', value: 1}
            ]
        }
    ]
      };

      var option4 = {
        title: {
          text: 'Physical activity-Type and Effect',
          left: 'center'  // 标题居中
        },
        series: {
          type: "sankey",
          layout: "none",
          emphasis: {
            focus: "adjacency"
          },
          data: [
            {
              name: "Improve severity of anxiety symptoms;Improve mental health"
            },
            {
              name: "Resistance exercise"
            },
            {
              name: "Improve balance"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms"
            },
            {
              name: "Individually exercise"
            },
            {
              name: "Virya yoga"
            },
            {
              name: "Home-based physical activity"
            },
            {
              name: "Dancing"
            },
            {
              name: "General exercise"
            },
            {
              name: "Balance exercise"
            },
            {
              name: "Tai Chi/yoga"
            },
            {
              name: "Coordination exercise"
            },
            {
              name: "Turkish folkloric dance"
            },
            {
              name: "Reduce stress level"
            },
            {
              name: "Baduanjin"
            },
            {
              name: "Aerobic exercise"
            },
            {
              name: "Qigong"
            },
            {
              name: "Improve severity of anxiety symptoms"
            },
            {
              name: "Physical activity"
            },
            {
              name: "Improve cardiorespiratory fitness"
            },
            {
              name: "Horticultural activity"
            },
            {
              name: "Pranayama"
            },
            {
              name: "Zumba dancing"
            },
            {
              name: "Circuit training"
            },
            {
              name: "Calisthenic exercise"
            },
            {
              name: "Kyusho Jitsu"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level"
            },
            {
              name: "Improve flexibility"
            },
            {
              name: "Improve happiness levels"
            },
            {
              name: "Improve cognitive function"
            },
            {
              name: "Strength exercise"
            },
            {
              name: "Flexibility exercise"
            },
            {
              name: "Yoga"
            },
            {
              name: "Improve severity of depressive symptoms;Improve cognitive function"
            },
            {
              name: "Improve severity of depressive symptoms;Improve quality of life"
            },
            {
              name: "Monkey frolic"
            },
            {
              name: "Taekwondo"
            },
            {
              name: "Exercise"
            },
            {
              name: "Five-animal frolics exercise"
            },
            {
              name: "Improve functional fitness"
            },
            {
              name: "Improve severity of depressive symptoms;Improve happiness levels"
            },
            {
              name: "Improve flexibility;Improve functional fitness"
            },
            {
              name: "Tai Chi"
            },
            {
              name: "Improve mental health"
            },
            {
              name: "Improve quality of life"
            },
            {
              name: "Pilates"
            },
            {
              name: "Improve severity of depressive symptoms"
            },
            {
              name: "Improve sleep quality"
            },
            {
              name: "Improve muscular fitness"
            },
            {
              name: "Improve cardiorespiratory fitness;Improve muscular fitness"
            },
            {
              name: "Reduce cardiovascular risk factors"
            },
            {
              name: "Dual-task training"
            },
            {
              name: "Anaerobic exercise"
            },
            {
              name: "Improve flexibility;Improve balance"
            }
          ],
          links: [
            {
              source: "Aerobic exercise",
              target: "Improve balance",
              value: 14
            },
            {
              source: "Aerobic exercise",
              target: "Improve cardiorespiratory fitness",
              value: 72
            },
            {
              source: "Aerobic exercise",
              target: "Improve cardiorespiratory fitness;Improve muscular fitness",
              value: 1
            },
            {
              source: "Aerobic exercise",
              target: "Improve cognitive function",
              value: 33
            },
            {
              source: "Aerobic exercise",
              target: "Improve flexibility",
              value: 6
            },
            {
              source: "Aerobic exercise",
              target: "Improve flexibility;Improve balance",
              value: 1
            },
            {
              source: "Aerobic exercise",
              target: "Improve functional fitness",
              value: 8
            },
            {
              source: "Aerobic exercise",
              target: "Improve happiness levels",
              value: 10
            },
            {
              source: "Aerobic exercise",
              target: "Improve mental health",
              value: 20
            },
            {
              source: "Aerobic exercise",
              target: "Improve muscular fitness",
              value: 18
            },
            {
              source: "Aerobic exercise",
              target: "Improve quality of life",
              value: 45
            },
            {
              source: "Aerobic exercise",
              target: "Improve severity of anxiety symptoms",
              value: 50
            },
            {
              source: "Aerobic exercise",
              target: "Improve severity of anxiety symptoms;Improve mental health",
              value: 1
            },
            {
              source: "Aerobic exercise",
              target: "Improve severity of depressive symptoms",
              value: 266
            },
            {
              source: "Aerobic exercise",
              target: "Improve severity of depressive symptoms;Improve cognitive function",
              value: 1
            },
            {
              source: "Aerobic exercise",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "Aerobic exercise",
              target: "Improve sleep quality",
              value: 17
            },
            {
              source: "Aerobic exercise",
              target: "Reduce cardiovascular risk factors",
              value: 15
            },
            {
              source: "Aerobic exercise",
              target: "Reduce stress level",
              value: 7
            },
            {
              source: "Anaerobic exercise",
              target: "Improve cardiorespiratory fitness",
              value: 4
            },
            {
              source: "Anaerobic exercise",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "Anaerobic exercise",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "Anaerobic exercise",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "Anaerobic exercise",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Anaerobic exercise",
              target: "Improve severity of depressive symptoms",
              value: 8
            },
            {
              source: "Anaerobic exercise",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "Anaerobic exercise",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Improve balance",
              value: 6
            },
            {
              source: "Balance exercise",
              target: "Improve cardiorespiratory fitness",
              value: 5
            },
            {
              source: "Balance exercise",
              target: "Improve cognitive function",
              value: 5
            },
            {
              source: "Balance exercise",
              target: "Improve flexibility",
              value: 3
            },
            {
              source: "Balance exercise",
              target: "Improve flexibility;Improve balance",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Improve muscular fitness",
              value: 4
            },
            {
              source: "Balance exercise",
              target: "Improve quality of life",
              value: 7
            },
            {
              source: "Balance exercise",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "Balance exercise",
              target: "Improve severity of depressive symptoms",
              value: 32
            },
            {
              source: "Balance exercise",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Improve sleep quality",
              value: 2
            },
            {
              source: "Balance exercise",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "Balance exercise",
              target: "Reduce stress level",
              value: 3
            },
            {
              source: "Resistance exercise",
              target: "Improve balance",
              value: 11
            },
            {
              source: "Resistance exercise",
              target: "Improve cardiorespiratory fitness",
              value: 30
            },
            {
              source: "Resistance exercise",
              target: "Improve cardiorespiratory fitness;Improve muscular fitness",
              value: 1
            },
            {
              source: "Resistance exercise",
              target: "Improve cognitive function",
              value: 14
            },
            {
              source: "Resistance exercise",
              target: "Improve flexibility",
              value: 8
            },
            {
              source: "Resistance exercise",
              target: "Improve flexibility;Improve functional fitness",
              value: 1
            },
            {
              source: "Resistance exercise",
              target: "Improve functional fitness",
              value: 6
            },
            {
              source: "Resistance exercise",
              target: "Improve happiness levels",
              value: 5
            },
            {
              source: "Resistance exercise",
              target: "Improve mental health",
              value: 12
            },
            {
              source: "Resistance exercise",
              target: "Improve muscular fitness",
              value: 29
            },
            {
              source: "Resistance exercise",
              target: "Improve quality of life",
              value: 36
            },
            {
              source: "Resistance exercise",
              target: "Improve severity of anxiety symptoms",
              value: 32
            },
            {
              source: "Resistance exercise",
              target: "Improve severity of depressive symptoms",
              value: 152
            },
            {
              source: "Resistance exercise",
              target: "Improve severity of depressive symptoms;Improve quality of life",
              value: 1
            },
            {
              source: "Resistance exercise",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "Resistance exercise",
              target: "Improve sleep quality",
              value: 10
            },
            {
              source: "Resistance exercise",
              target: "Reduce cardiovascular risk factors",
              value: 6
            },
            {
              source: "Resistance exercise",
              target: "Reduce stress level",
              value: 8
            },
            {
              source: "Flexibility exercise",
              target: "Improve balance",
              value: 4
            },
            {
              source: "Flexibility exercise",
              target: "Improve cardiorespiratory fitness",
              value: 13
            },
            {
              source: "Flexibility exercise",
              target: "Improve cognitive function",
              value: 9
            },
            {
              source: "Flexibility exercise",
              target: "Improve flexibility",
              value: 6
            },
            {
              source: "Flexibility exercise",
              target: "Improve flexibility;Improve balance",
              value: 1
            },
            {
              source: "Flexibility exercise",
              target: "Improve flexibility;Improve functional fitness",
              value: 1
            },
            {
              source: "Flexibility exercise",
              target: "Improve functional fitness",
              value: 3
            },
            {
              source: "Flexibility exercise",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "Flexibility exercise",
              target: "Improve mental health",
              value: 5
            },
            {
              source: "Flexibility exercise",
              target: "Improve muscular fitness",
              value: 8
            },
            {
              source: "Flexibility exercise",
              target: "Improve quality of life",
              value: 15
            },
            {
              source: "Flexibility exercise",
              target: "Improve severity of anxiety symptoms",
              value: 12
            },
            {
              source: "Flexibility exercise",
              target: "Improve severity of depressive symptoms",
              value: 70
            },
            {
              source: "Flexibility exercise",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "Flexibility exercise",
              target: "Improve sleep quality",
              value: 5
            },
            {
              source: "Flexibility exercise",
              target: "Reduce cardiovascular risk factors",
              value: 4
            },
            {
              source: "Flexibility exercise",
              target: "Reduce stress level",
              value: 4
            },
            {
              source: "Coordination exercise",
              target: "Improve balance",
              value: 2
            },
            {
              source: "Coordination exercise",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "Coordination exercise",
              target: "Improve cardiorespiratory fitness;Improve muscular fitness",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve cognitive function",
              value: 4
            },
            {
              source: "Coordination exercise",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "Coordination exercise",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve severity of depressive symptoms",
              value: 11
            },
            {
              source: "Coordination exercise",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Coordination exercise",
              target: "Improve sleep quality",
              value: 3
            },
            {
              source: "Coordination exercise",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "Dual-task training",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Dual-task training",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Yoga",
              target: "Improve cardiorespiratory fitness",
              value: 5
            },
            {
              source: "Yoga",
              target: "Improve cognitive function",
              value: 8
            },
            {
              source: "Yoga",
              target: "Improve flexibility",
              value: 2
            },
            {
              source: "Yoga",
              target: "Improve functional fitness",
              value: 2
            },
            {
              source: "Yoga",
              target: "Improve happiness levels",
              value: 2
            },
            {
              source: "Yoga",
              target: "Improve mental health",
              value: 13
            },
            {
              source: "Yoga",
              target: "Improve quality of life",
              value: 27
            },
            {
              source: "Yoga",
              target: "Improve severity of anxiety symptoms",
              value: 43
            },
            {
              source: "Yoga",
              target: "Improve severity of depressive symptoms",
              value: 94
            },
            {
              source: "Yoga",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "Yoga",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level",
              value: 1
            },
            {
              source: "Yoga",
              target: "Improve sleep quality",
              value: 9
            },
            {
              source: "Yoga",
              target: "Reduce cardiovascular risk factors",
              value: 3
            },
            {
              source: "Yoga",
              target: "Reduce stress level",
              value: 9
            },
            {
              source: "Baduanjin",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Baduanjin",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Baduanjin",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Calisthenic exercise",
              target: "Improve balance",
              value: 1
            },
            {
              source: "Calisthenic exercise",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "Calisthenic exercise",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "Calisthenic exercise",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Circuit training",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Dancing",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Dancing",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "Dancing",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Dancing",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "Exercise",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "Exercise",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Exercise",
              target: "Improve mental health",
              value: 3
            },
            {
              source: "Exercise",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Exercise",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "Exercise",
              target: "Improve severity of depressive symptoms",
              value: 13
            },
            {
              source: "Five-animal frolics exercise",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Five-animal frolics exercise",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Five-animal frolics exercise",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Five-animal frolics exercise",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "General exercise",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "General exercise",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "General exercise",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Home-based physical activity",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Horticultural activity",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Horticultural activity",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Individually exercise",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Kyusho Jitsu",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Kyusho Jitsu",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Kyusho Jitsu",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "Monkey frolic",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Monkey frolic",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Physical activity",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Physical activity",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "Physical activity",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "Physical activity",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "Pilates",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "Pilates",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Pilates",
              target: "Improve quality of life",
              value: 3
            },
            {
              source: "Pilates",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "Pilates",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "Pilates",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "Pranayama",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Pranayama",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Qigong",
              target: "Improve balance",
              value: 1
            },
            {
              source: "Qigong",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "Qigong",
              target: "Improve happiness levels",
              value: 5
            },
            {
              source: "Qigong",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Qigong",
              target: "Improve muscular fitness",
              value: 2
            },
            {
              source: "Qigong",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Qigong",
              target: "Improve severity of anxiety symptoms",
              value: 3
            },
            {
              source: "Qigong",
              target: "Improve severity of depressive symptoms",
              value: 7
            },
            {
              source: "Qigong",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "Strength exercise",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "Taekwondo",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Taekwondo",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "Taekwondo",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Taekwondo",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve balance",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "Tai Chi",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "Tai Chi",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Tai Chi",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "Tai Chi",
              target: "Improve sleep quality",
              value: 2
            },
            {
              source: "Tai Chi",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "Tai Chi/yoga",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Tai Chi/yoga",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Turkish folkloric dance",
              target: "Improve balance",
              value: 1
            },
            {
              source: "Turkish folkloric dance",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "Turkish folkloric dance",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "Turkish folkloric dance",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "Virya yoga",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "Virya yoga",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "Virya yoga",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "Zumba dancing",
              target: "Improve balance",
              value: 1
            },
            {
              source: "Zumba dancing",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "Zumba dancing",
              target: "Improve severity of depressive symptoms",
              value: 1
            }
          ]
        }
      };

      var option5 = {
        title: {
          text: 'Physical activity-Intensity and Effect',
          left: 'center'  // 标题居中
        },
          series: {
            type: "sankey",
            layout: "none",
            emphasis: {
              focus: "adjacency"
            },
            data: [
              {
                name: "Improve severity of anxiety symptoms;Improve mental health"
              },
              {
                name: "Light to moderate"
              },
              {
                name: "Improve balance"
              },
              {
                name: "Preferred intensity"
              },
              {
                name: "Prescribed intensity"
              },
              {
                name: "Moderate to vigorous"
              },
              {
                name: "Reduce stress level"
              },
              {
                name: "Improve severity of anxiety symptoms"
              },
              {
                name: "Improve cardiorespiratory fitness"
              },
              {
                name: "Moderate or lower"
              },
              {
                name: "Vigorous"
              },
              {
                name: "Near-maximal to maximal"
              },
              {
                name: "Improve flexibility"
              },
              {
                name: "Improve happiness levels"
              },
              {
                name: "Improve cognitive function"
              },
              {
                name: "Improve severity of depressive symptoms;Improve quality of life"
              },
              {
                name: "Light"
              },
              {
                name: "Light to vigorous"
              },
              {
                name: "Moderate"
              },
              {
                name: "Improve functional fitness"
              },
              {
                name: "Improve severity of depressive symptoms;Improve happiness levels"
              },
              {
                name: "Very light to light"
              },
              {
                name: "Improve mental health"
              },
              {
                name: "Improve quality of life"
              },
              {
                name: "Very light to moderate"
              },
              {
                name: "Improve severity of depressive symptoms"
              },
              {
                name: "Moderate or vigorous"
              },
              {
                name: "Improve sleep quality"
              },
              {
                name: "Very light"
              },
              {
                name: "Improve muscular fitness"
              },
              {
                name: "Improve cardiorespiratory fitness;Improve muscular fitness"
              },
              {
                name: "Reduce cardiovascular risk factors"
              }
            ],
            links: [
              {
                source: "Light",
                target: "Improve balance",
                value: 1
              },
              {
                source: "Light",
                target: "Improve cardiorespiratory fitness",
                value: 7
              },
              {
                source: "Light",
                target: "Improve cognitive function",
                value: 5
              },
              {
                source: "Light",
                target: "Improve flexibility",
                value: 2
              },
              {
                source: "Light",
                target: "Improve functional fitness",
                value: 1
              },
              {
                source: "Light",
                target: "Improve happiness levels",
                value: 1
              },
              {
                source: "Light",
                target: "Improve mental health",
                value: 3
              },
              {
                source: "Light",
                target: "Improve muscular fitness",
                value: 2
              },
              {
                source: "Light",
                target: "Improve quality of life",
                value: 6
              },
              {
                source: "Light",
                target: "Improve severity of anxiety symptoms",
                value: 7
              },
              {
                source: "Light",
                target: "Improve severity of depressive symptoms",
                value: 38
              },
              {
                source: "Light",
                target: "Improve severity of depressive symptoms;Improve happiness levels",
                value: 1
              },
              {
                source: "Light",
                target: "Improve severity of depressive symptoms;Improve quality of life",
                value: 1
              },
              {
                source: "Light",
                target: "Improve sleep quality",
                value: 4
              },
              {
                source: "Light",
                target: "Reduce cardiovascular risk factors",
                value: 3
              },
              {
                source: "Light",
                target: "Reduce stress level",
                value: 2
              },
              {
                source: "Light to moderate",
                target: "Improve cardiorespiratory fitness",
                value: 5
              },
              {
                source: "Light to moderate",
                target: "Improve cognitive function",
                value: 3
              },
              {
                source: "Light to moderate",
                target: "Improve flexibility",
                value: 1
              },
              {
                source: "Light to moderate",
                target: "Improve happiness levels",
                value: 1
              },
              {
                source: "Light to moderate",
                target: "Improve mental health",
                value: 2
              },
              {
                source: "Light to moderate",
                target: "Improve muscular fitness",
                value: 1
              },
              {
                source: "Light to moderate",
                target: "Improve quality of life",
                value: 4
              },
              {
                source: "Light to moderate",
                target: "Improve severity of anxiety symptoms",
                value: 3
              },
              {
                source: "Light to moderate",
                target: "Improve severity of depressive symptoms",
                value: 19
              },
              {
                source: "Light to moderate",
                target: "Improve sleep quality",
                value: 3
              },
              {
                source: "Light to moderate",
                target: "Reduce cardiovascular risk factors",
                value: 2
              },
              {
                source: "Light to moderate",
                target: "Reduce stress level",
                value: 1
              },
              {
                source: "Light to vigorous",
                target: "Improve cardiorespiratory fitness",
                value: 1
              },
              {
                source: "Light to vigorous",
                target: "Improve quality of life",
                value: 1
              },
              {
                source: "Light to vigorous",
                target: "Improve severity of depressive symptoms",
                value: 4
              },
              {
                source: "Light to vigorous",
                target: "Reduce cardiovascular risk factors",
                value: 1
              },
              {
                source: "Moderate",
                target: "Improve balance",
                value: 8
              },
              {
                source: "Moderate",
                target: "Improve cardiorespiratory fitness",
                value: 24
              },
              {
                source: "Moderate",
                target: "Improve cognitive function",
                value: 17
              },
              {
                source: "Moderate",
                target: "Improve flexibility",
                value: 4
              },
              {
                source: "Moderate",
                target: "Improve functional fitness",
                value: 3
              },
              {
                source: "Moderate",
                target: "Improve happiness levels",
                value: 5
              },
              {
                source: "Moderate",
                target: "Improve mental health",
                value: 7
              },
              {
                source: "Moderate",
                target: "Improve muscular fitness",
                value: 15
              },
              {
                source: "Moderate",
                target: "Improve quality of life",
                value: 20
              },
              {
                source: "Moderate",
                target: "Improve severity of anxiety symptoms",
                value: 23
              },
              {
                source: "Moderate",
                target: "Improve severity of depressive symptoms",
                value: 118
              },
              {
                source: "Moderate",
                target: "Improve severity of depressive symptoms;Improve quality of life",
                value: 1
              },
              {
                source: "Moderate",
                target: "Improve sleep quality",
                value: 7
              },
              {
                source: "Moderate",
                target: "Reduce cardiovascular risk factors",
                value: 10
              },
              {
                source: "Moderate",
                target: "Reduce stress level",
                value: 6
              },
              {
                source: "Vigorous",
                target: "Improve balance",
                value: 1
              },
              {
                source: "Vigorous",
                target: "Improve cardiorespiratory fitness",
                value: 19
              },
              {
                source: "Vigorous",
                target: "Improve cognitive function",
                value: 2
              },
              {
                source: "Vigorous",
                target: "Improve happiness levels",
                value: 1
              },
              {
                source: "Vigorous",
                target: "Improve mental health",
                value: 4
              },
              {
                source: "Vigorous",
                target: "Improve muscular fitness",
                value: 5
              },
              {
                source: "Vigorous",
                target: "Improve quality of life",
                value: 10
              },
              {
                source: "Vigorous",
                target: "Improve severity of anxiety symptoms",
                value: 13
              },
              {
                source: "Vigorous",
                target: "Improve severity of anxiety symptoms;Improve mental health",
                value: 1
              },
              {
                source: "Vigorous",
                target: "Improve severity of depressive symptoms",
                value: 52
              },
              {
                source: "Vigorous",
                target: "Improve severity of depressive symptoms;Improve quality of life",
                value: 1
              },
              {
                source: "Vigorous",
                target: "Improve sleep quality",
                value: 5
              },
              {
                source: "Vigorous",
                target: "Reduce cardiovascular risk factors",
                value: 3
              },
              {
                source: "Vigorous",
                target: "Reduce stress level",
                value: 2
              },
              {
                source: "Moderate or lower",
                target: "Improve functional fitness",
                value: 1
              },
              {
                source: "Moderate or lower",
                target: "Improve severity of depressive symptoms",
                value: 1
              },
              {
                source: "Moderate or vigorous",
                target: "Improve severity of depressive symptoms",
                value: 2
              },
              {
                source: "Moderate to vigorous",
                target: "Improve balance",
                value: 3
              },
              {
                source: "Moderate to vigorous",
                target: "Improve cardiorespiratory fitness",
                value: 19
              },
              {
                source: "Moderate to vigorous",
                target: "Improve cardiorespiratory fitness;Improve muscular fitness",
                value: 1
              },
              {
                source: "Moderate to vigorous",
                target: "Improve cognitive function",
                value: 6
              },
              {
                source: "Moderate to vigorous",
                target: "Improve flexibility",
                value: 1
              },
              {
                source: "Moderate to vigorous",
                target: "Improve functional fitness",
                value: 1
              },
              {
                source: "Moderate to vigorous",
                target: "Improve happiness levels",
                value: 2
              },
              {
                source: "Moderate to vigorous",
                target: "Improve mental health",
                value: 3
              },
              {
                source: "Moderate to vigorous",
                target: "Improve muscular fitness",
                value: 4
              },
              {
                source: "Moderate to vigorous",
                target: "Improve quality of life",
                value: 9
              },
              {
                source: "Moderate to vigorous",
                target: "Improve severity of anxiety symptoms",
                value: 8
              },
              {
                source: "Moderate to vigorous",
                target: "Improve severity of depressive symptoms",
                value: 49
              },
              {
                source: "Moderate to vigorous",
                target: "Improve sleep quality",
                value: 2
              },
              {
                source: "Moderate to vigorous",
                target: "Reduce cardiovascular risk factors",
                value: 3
              },
              {
                source: "Preferred intensity",
                target: "Improve happiness levels",
                value: 1
              },
              {
                source: "Preferred intensity",
                target: "Improve quality of life",
                value: 1
              },
              {
                source: "Preferred intensity",
                target: "Improve severity of depressive symptoms",
                value: 1
              },
              {
                source: "Prescribed intensity",
                target: "Improve happiness levels",
                value: 1
              },
              {
                source: "Prescribed intensity",
                target: "Improve quality of life",
                value: 1
              },
              {
                source: "Prescribed intensity",
                target: "Improve severity of depressive symptoms",
                value: 1
              },
              {
                source: "Very light",
                target: "Improve balance",
                value: 1
              },
              {
                source: "Very light",
                target: "Improve cardiorespiratory fitness",
                value: 3
              },
              {
                source: "Very light",
                target: "Improve functional fitness",
                value: 2
              },
              {
                source: "Very light",
                target: "Improve muscular fitness",
                value: 1
              },
              {
                source: "Very light",
                target: "Improve quality of life",
                value: 1
              },
              {
                source: "Very light",
                target: "Improve severity of anxiety symptoms",
                value: 1
              },
              {
                source: "Very light",
                target: "Improve severity of depressive symptoms",
                value: 8
              },
              {
                source: "Very light",
                target: "Reduce cardiovascular risk factors",
                value: 1
              },
              {
                source: "Very light",
                target: "Reduce stress level",
                value: 1
              },
              {
                source: "Very light to light",
                target: "Improve quality of life",
                value: 1
              },
              {
                source: "Very light to moderate",
                target: "Improve cognitive function",
                value: 1
              },
              {
                source: "Near-maximal to maximal",
                target: "Improve cardiorespiratory fitness",
                value: 1
              },
              {
                source: "Near-maximal to maximal",
                target: "Improve cognitive function",
                value: 1
              }
            ]
          }
      };

      var option6 = {
        title: {
          text: 'Physical activity-Volume (min/week) and Effect',
          left: 'center'  // 标题居中
        },
        series: {
          type: "sankey",
          layout: "none",
          emphasis: {
            focus: "adjacency"
          },
          data: [
            {
              name: "75-150"
            },
            {
              name: "150-180"
            },
            {
              name: "15"
            },
            {
              name: "16"
            },
            {
              name: "80-120"
            },
            {
              name: "20"
            },
            {
              name: "24"
            },
            {
              name: "540"
            },
            {
              name: "60min/week"
            },
            {
              name: "30"
            },
            {
              name: "36"
            },
            {
              name: "30-60"
            },
            {
              name: "40"
            },
            {
              name: "180-360"
            },
            {
              name: "120-135"
            },
            {
              name: "45"
            },
            {
              name: "48"
            },
            {
              name: "160-240"
            },
            {
              name: "50"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level"
            },
            {
              name: "60"
            },
            {
              name: "120-180"
            },
            {
              name: "165-180"
            },
            {
              name: "Improve cognitive function"
            },
            {
              name: "69"
            },
            {
              name: "70"
            },
            {
              name: "150-200"
            },
            {
              name: "75"
            },
            {
              name: "Improve severity of depressive symptoms;Improve cognitive function"
            },
            {
              name: "80"
            },
            {
              name: "600"
            },
            {
              name: "90"
            },
            {
              name: "Improve functional fitness"
            },
            {
              name: "Improve severity of depressive symptoms;Improve happiness levels"
            },
            {
              name: "97.5"
            },
            {
              name: "\u226580"
            },
            {
              name: "99"
            },
            {
              name: "100"
            },
            {
              name: "100-140"
            },
            {
              name: "105"
            },
            {
              name: "Improve mental health"
            },
            {
              name: "Improve quality of life"
            },
            {
              name: "Improve severity of depressive symptoms"
            },
            {
              name: "150-250"
            },
            {
              name: "Improve muscular fitness"
            },
            {
              name: "120"
            },
            {
              name: "\u2265150 or 75"
            },
            {
              name: "\u2265 150"
            },
            {
              name: "130"
            },
            {
              name: "\u226520-60"
            },
            {
              name: "132"
            },
            {
              name: "\u2265300"
            },
            {
              name: "Improve balance"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms"
            },
            {
              name: "135"
            },
            {
              name: "100-120"
            },
            {
              name: "140"
            },
            {
              name: "210-420"
            },
            {
              name: "150"
            },
            {
              name: "180-210"
            },
            {
              name: "180-240"
            },
            {
              name: "160"
            },
            {
              name: "90-180"
            },
            {
              name: "165"
            },
            {
              name: "13 minutes and 20 seconds"
            },
            {
              name: "Improve severity of anxiety symptoms"
            },
            {
              name: "175"
            },
            {
              name: "180"
            },
            {
              name: "90-150"
            },
            {
              name: "60-180"
            },
            {
              name: "Improve flexibility"
            },
            {
              name: "40-180"
            },
            {
              name: "Improve happiness levels"
            },
            {
              name: "200"
            },
            {
              name: "60min/month"
            },
            {
              name: "240-360"
            },
            {
              name: "210"
            },
            {
              name: "60-165"
            },
            {
              name: "223"
            },
            {
              name: "225"
            },
            {
              name: "\u226590"
            },
            {
              name: "150-225"
            },
            {
              name: "135-180"
            },
            {
              name: "240"
            },
            {
              name: "90-110"
            },
            {
              name: "250"
            },
            {
              name: "\u2264150"
            },
            {
              name: "\u226540"
            },
            {
              name: "270"
            },
            {
              name: "60-80"
            },
            {
              name: "280"
            },
            {
              name: "100-300"
            },
            {
              name: "Improve cardiorespiratory fitness"
            },
            {
              name: "300"
            },
            {
              name: "80-240"
            },
            {
              name: "315"
            },
            {
              name: "840"
            },
            {
              name: "120-200"
            },
            {
              name: "Improve severity of depressive symptoms;Improve quality of life"
            },
            {
              name: "16 minutes and 50 seconds"
            },
            {
              name: "60-90"
            },
            {
              name: "60-240"
            },
            {
              name: "75-90"
            },
            {
              name: "180-270"
            },
            {
              name: "360"
            },
            {
              name: "90-120"
            },
            {
              name: "20-120"
            },
            {
              name: "Improve sleep quality"
            },
            {
              name: "\u2265120"
            },
            {
              name: "Improve cardiorespiratory fitness;Improve muscular fitness"
            },
            {
              name: "Reduce cardiovascular risk factors"
            },
            {
              name: "\u2265150"
            },
            {
              name: "390"
            },
            {
              name: "60-120"
            },
            {
              name: "90-135"
            },
            {
              name: "45-60"
            },
            {
              name: "\u2265210"
            },
            {
              name: "193-238"
            },
            {
              name: "\u2265140"
            },
            {
              name: "Reduce stress level"
            },
            {
              name: "\u2265180"
            },
            {
              name: "420"
            },
            {
              name: "60-420"
            },
            {
              name: "45-75"
            },
            {
              name: "30min"
            },
            {
              name: "\u226460"
            },
            {
              name: "28 minutes and 20 seconds"
            },
            {
              name: "450"
            },
            {
              name: "120-160"
            },
            {
              name: "126-198"
            },
            {
              name: "\u2264210"
            },
            {
              name: "Improve flexibility;Improve functional fitness"
            },
            {
              name: "40-160"
            },
            {
              name: "165-220"
            },
            {
              name: "25-75"
            },
            {
              name: "80-160"
            },
            {
              name: "90-225"
            },
            {
              name: "120-150"
            },
            {
              name: "100-150"
            },
            {
              name: "135-150"
            }
          ],
          links: [
            {
              source: "15",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "16",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "20",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "20",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "24",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "30",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "30",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "30",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "30",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "30",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "30",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "36",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "40",
              target: "Improve balance",
              value: 1
            },
            {
              source: "40",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "40",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "40",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "40",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "40",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "40",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "40",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "45",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "45",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "45",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "45",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "45",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "45",
              target: "Improve sleep quality",
              value: 2
            },
            {
              source: "48",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "50",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "50",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "50",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "50",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "50",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "60",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "60",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "60",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "60",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "60",
              target: "Improve happiness levels",
              value: 3
            },
            {
              source: "60",
              target: "Improve mental health",
              value: 3
            },
            {
              source: "60",
              target: "Improve quality of life",
              value: 7
            },
            {
              source: "60",
              target: "Improve severity of anxiety symptoms",
              value: 7
            },
            {
              source: "60",
              target: "Improve severity of depressive symptoms",
              value: 24
            },
            {
              source: "60",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "60",
              target: "Improve sleep quality",
              value: 3
            },
            {
              source: "69",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "69",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "70",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "75",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "75",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "75",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "75",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "75",
              target: "Improve severity of anxiety symptoms",
              value: 6
            },
            {
              source: "75",
              target: "Improve severity of depressive symptoms",
              value: 10
            },
            {
              source: "75",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "75",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "80",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "80",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "80",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "80",
              target: "Improve severity of depressive symptoms",
              value: 7
            },
            {
              source: "80",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "80",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "90",
              target: "Improve balance",
              value: 1
            },
            {
              source: "90",
              target: "Improve cardiorespiratory fitness",
              value: 6
            },
            {
              source: "90",
              target: "Improve cognitive function",
              value: 6
            },
            {
              source: "90",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "90",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "90",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "90",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "90",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "90",
              target: "Improve quality of life",
              value: 10
            },
            {
              source: "90",
              target: "Improve severity of anxiety symptoms",
              value: 7
            },
            {
              source: "90",
              target: "Improve severity of depressive symptoms",
              value: 32
            },
            {
              source: "90",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "90",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "90",
              target: "Reduce cardiovascular risk factors",
              value: 3
            },
            {
              source: "90",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "97.5",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "97.5",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "97.5",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "97.5",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "99",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "99",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "100",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "100",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "100",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "100",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "100",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "100",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "100",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "105",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "105",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "105",
              target: "Improve severity of depressive symptoms",
              value: 7
            },
            {
              source: "105",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "120",
              target: "Improve balance",
              value: 2
            },
            {
              source: "120",
              target: "Improve cardiorespiratory fitness",
              value: 7
            },
            {
              source: "120",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "120",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "120",
              target: "Improve functional fitness",
              value: 2
            },
            {
              source: "120",
              target: "Improve happiness levels",
              value: 2
            },
            {
              source: "120",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "120",
              target: "Improve muscular fitness",
              value: 4
            },
            {
              source: "120",
              target: "Improve quality of life",
              value: 8
            },
            {
              source: "120",
              target: "Improve severity of anxiety symptoms",
              value: 8
            },
            {
              source: "120",
              target: "Improve severity of depressive symptoms",
              value: 37
            },
            {
              source: "120",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "120",
              target: "Improve severity of depressive symptoms;Improve quality of life",
              value: 1
            },
            {
              source: "120",
              target: "Improve sleep quality",
              value: 4
            },
            {
              source: "120",
              target: "Reduce cardiovascular risk factors",
              value: 2
            },
            {
              source: "120",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "130",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "130",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "132",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "132",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "132",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "135",
              target: "Improve balance",
              value: 2
            },
            {
              source: "135",
              target: "Improve cardiorespiratory fitness",
              value: 7
            },
            {
              source: "135",
              target: "Improve cognitive function",
              value: 5
            },
            {
              source: "135",
              target: "Improve happiness levels",
              value: 2
            },
            {
              source: "135",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "135",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "135",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "135",
              target: "Improve severity of anxiety symptoms",
              value: 4
            },
            {
              source: "135",
              target: "Improve severity of depressive symptoms",
              value: 20
            },
            {
              source: "135",
              target: "Reduce cardiovascular risk factors",
              value: 2
            },
            {
              source: "135",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "140",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "140",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "140",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "140",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "140",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "140",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "140",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "140",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "150",
              target: "Improve balance",
              value: 2
            },
            {
              source: "150",
              target: "Improve cardiorespiratory fitness",
              value: 3
            },
            {
              source: "150",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "150",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "150",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "150",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "150",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "150",
              target: "Improve muscular fitness",
              value: 2
            },
            {
              source: "150",
              target: "Improve quality of life",
              value: 15
            },
            {
              source: "150",
              target: "Improve severity of anxiety symptoms",
              value: 6
            },
            {
              source: "150",
              target: "Improve severity of depressive symptoms",
              value: 26
            },
            {
              source: "150",
              target: "Improve sleep quality",
              value: 2
            },
            {
              source: "160",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "160",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "165",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "165",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "165",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "175",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "175",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "180",
              target: "Improve balance",
              value: 5
            },
            {
              source: "180",
              target: "Improve cardiorespiratory fitness",
              value: 14
            },
            {
              source: "180",
              target: "Improve cognitive function",
              value: 6
            },
            {
              source: "180",
              target: "Improve flexibility",
              value: 3
            },
            {
              source: "180",
              target: "Improve functional fitness",
              value: 3
            },
            {
              source: "180",
              target: "Improve happiness levels",
              value: 3
            },
            {
              source: "180",
              target: "Improve mental health",
              value: 7
            },
            {
              source: "180",
              target: "Improve muscular fitness",
              value: 11
            },
            {
              source: "180",
              target: "Improve quality of life",
              value: 15
            },
            {
              source: "180",
              target: "Improve severity of anxiety symptoms",
              value: 13
            },
            {
              source: "180",
              target: "Improve severity of depressive symptoms",
              value: 66
            },
            {
              source: "180",
              target: "Improve sleep quality",
              value: 6
            },
            {
              source: "180",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "180",
              target: "Reduce stress level",
              value: 4
            },
            {
              source: "200",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "200",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "200",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "200",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "210",
              target: "Improve balance",
              value: 1
            },
            {
              source: "210",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "210",
              target: "Improve flexibility;Improve functional fitness",
              value: 1
            },
            {
              source: "210",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "210",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "210",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "210",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "210",
              target: "Improve severity of depressive symptoms",
              value: 11
            },
            {
              source: "210",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level",
              value: 1
            },
            {
              source: "210",
              target: "Improve sleep quality",
              value: 3
            },
            {
              source: "223",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "223",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "223",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "225",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "225",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "240",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "240",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "240",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "240",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "250",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "250",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "270",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "270",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "270",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "280",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "280",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "280",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "300",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "300",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "300",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "300",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "300",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "300",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "315",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "360",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "360",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "360",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "390",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "420",
              target: "Improve severity of anxiety symptoms",
              value: 4
            },
            {
              source: "420",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "420",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "420",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "450",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "450",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "540",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "540",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "540",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "600",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "840",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "840",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "840",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "840",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "100-120",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "100-120",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "100-140",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "100-140",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "100-140",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "100-150",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "100-150",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "100-150",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "100-150",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "100-300",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "100-300",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "120-135",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "120-150",
              target: "Improve balance",
              value: 1
            },
            {
              source: "120-150",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "120-150",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "120-150",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "120-150",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "120-150",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "120-160",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "120-160",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "120-160",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "120-180",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "120-200",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "120-200",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "120-200",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "126-198",
              target: "Improve balance",
              value: 1
            },
            {
              source: "126-198",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "126-198",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "126-198",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "13 minutes and 20 seconds",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "13 minutes and 20 seconds",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "13 minutes and 20 seconds",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "13 minutes and 20 seconds",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "135-150",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "135-150",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "135-150",
              target: "Improve muscular fitness",
              value: 2
            },
            {
              source: "135-150",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "135-150",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "135-150",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "135-180",
              target: "Improve balance",
              value: 1
            },
            {
              source: "135-180",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "135-180",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "135-180",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "135-180",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "135-180",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "150-180",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "150-180",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "150-180",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "150-180",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "150-180",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "150-180",
              target: "Reduce cardiovascular risk factors",
              value: 2
            },
            {
              source: "150-200",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "150-200",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "150-200",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "150-225",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "150-225",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "150-250",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "16 minutes and 50 seconds",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "16 minutes and 50 seconds",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "16 minutes and 50 seconds",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "16 minutes and 50 seconds",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "160-240",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "160-240",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "160-240",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "165-180",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "165-220",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "165-220",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "180-210",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "180-210",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "180-210",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "180-240",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "180-240",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "180-270",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "180-270",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "180-270",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "180-270",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "180-270",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "180-360",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "180-360",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "180-360",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "193-238",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "20-120",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "210-420",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "240-360",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "25-75",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "25-75",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "28 minutes and 20 seconds",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "28 minutes and 20 seconds",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "28 minutes and 20 seconds",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "28 minutes and 20 seconds",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "30-60",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "30min",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "40-160",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "40-160",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "40-180",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "40-180",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "40-180",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "40-180",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "45-60",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "45-60",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "45-60",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "45-60",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "45-75",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "45-75",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "45-75",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "60-120",
              target: "Improve balance",
              value: 1
            },
            {
              source: "60-120",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "60-120",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "60-120",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "60-165",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "60-180",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "60-180",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "60-180",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "60-240",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "60-240",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "60-420",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "60-80",
              target: "Improve balance",
              value: 1
            },
            {
              source: "60-80",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "60-80",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "60-80",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "60-80",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "60-90",
              target: "Improve cardiorespiratory fitness",
              value: 3
            },
            {
              source: "60-90",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "60-90",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "60-90",
              target: "Improve quality of life",
              value: 3
            },
            {
              source: "60-90",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "60-90",
              target: "Improve severity of depressive symptoms",
              value: 6
            },
            {
              source: "60-90",
              target: "Improve severity of depressive symptoms;Improve cognitive function",
              value: 1
            },
            {
              source: "60min/month",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "60min/week",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "75-150",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "75-90",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "75-90",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "75-90",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "80-120",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "80-160",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "80-160",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "80-240",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "80-240",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "90-110",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "90-110",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "90-110",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve balance",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve quality of life",
              value: 3
            },
            {
              source: "90-120",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "90-120",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "90-135",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "90-135",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "90-135",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "90-135",
              target: "Improve severity of depressive symptoms",
              value: 5
            },
            {
              source: "90-135",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "90-135",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "90-150",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "90-180",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "90-180",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "90-225",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "90-225",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "90-225",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "\u2264150",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2264210",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "\u2264210",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "\u2264210",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2264210",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "\u226460",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265 150",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "\u2265 150",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "\u2265 150",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265120",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "\u2265120",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "\u2265120",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "\u2265140",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265150",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "\u2265150",
              target: "Improve severity of depressive symptoms",
              value: 4
            },
            {
              source: "\u2265150 or 75",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265180",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "\u2265180",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "\u2265180",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "\u2265180",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "\u2265180",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "\u2265180",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "\u226520-60",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265210",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "\u2265300",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "\u226540",
              target: "Improve balance",
              value: 1
            },
            {
              source: "\u226540",
              target: "Improve cardiorespiratory fitness;Improve muscular fitness",
              value: 1
            },
            {
              source: "\u226540",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "\u226540",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u226580",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u226590",
              target: "Improve severity of depressive symptoms",
              value: 2
            }
          ]
        }
      };

      var option7 = {
        title: {
          text: 'Physical activity-Frequency (times or days/week) and Effect',
          left: 'center'  // 标题居中
        },
        series: {
          type: "sankey",
          layout: "none",
          emphasis: {
            focus: "adjacency"
          },
          data: [
            {
              name: "1"
            },
            {
              name: "1.5"
            },
            {
              name: "2"
            },
            {
              name: "3"
            },
            {
              name: "4"
            },
            {
              name: "5"
            },
            {
              name: "6"
            },
            {
              name: "7"
            },
            {
              name: "1-7"
            },
            {
              name: "2 or 3"
            },
            {
              name: "7days/21times"
            },
            {
              name: "\u22652"
            },
            {
              name: "3-6"
            },
            {
              name: "3\u20135"
            },
            {
              name: "Improve cardiorespiratory fitness"
            },
            {
              name: "Improve severity of anxiety symptoms"
            },
            {
              name: "3-5"
            },
            {
              name: "Improve functional fitness"
            },
            {
              name: "Improve happiness levels"
            },
            {
              name: "Improve cognitive function"
            },
            {
              name: "1 session/week"
            },
            {
              name: "Improve severity of depressive symptoms;Improve cognitive function"
            },
            {
              name: "2-3"
            },
            {
              name: "Improve severity of depressive symptoms;Improve happiness levels"
            },
            {
              name: "7days(21sessions)"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level"
            },
            {
              name: "1-4 session/month"
            },
            {
              name: "2-4"
            },
            {
              name: "Reduce stress level"
            },
            {
              name: "1-2"
            },
            {
              name: "Improve sleep quality"
            },
            {
              name: "Improve flexibility"
            },
            {
              name: "Improve quality of life"
            },
            {
              name: "1(every other week)"
            },
            {
              name: "14sessions(7days)"
            },
            {
              name: "3-4"
            },
            {
              name: "4\u20136"
            },
            {
              name: "14(twice a day)"
            },
            {
              name: "Reduce cardiovascular risk factors"
            },
            {
              name: "Improve flexibility;Improve functional fitness"
            },
            {
              name: "1 session/month"
            },
            {
              name: "Improve severity of depressive symptoms;Improve quality of life"
            },
            {
              name: "\u22654"
            },
            {
              name: "\u2265 3"
            },
            {
              name: "Improve severity of depressive symptoms"
            },
            {
              name: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms"
            },
            {
              name: "\u22655"
            },
            {
              name: "Improve mental health"
            },
            {
              name: "1-3"
            },
            {
              name: "Improve muscular fitness"
            },
            {
              name: "7days(14sessions)"
            },
            {
              name: "Improve cardiorespiratory fitness;Improve muscular fitness"
            },
            {
              name: "\u22641"
            },
            {
              name: "\u22653"
            },
            {
              name: "Improve balance"
            }
          ],
          links: [
            {
              source: "1",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "1",
              target: "Improve cognitive function",
              value: 8
            },
            {
              source: "1",
              target: "Improve happiness levels",
              value: 2
            },
            {
              source: "1",
              target: "Improve mental health",
              value: 7
            },
            {
              source: "1",
              target: "Improve quality of life",
              value: 14
            },
            {
              source: "1",
              target: "Improve severity of anxiety symptoms",
              value: 18
            },
            {
              source: "1",
              target: "Improve severity of depressive symptoms",
              value: 45
            },
            {
              source: "1",
              target: "Improve sleep quality",
              value: 7
            },
            {
              source: "1",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "1",
              target: "Reduce stress level",
              value: 3
            },
            {
              source: "1.5",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "1.5",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "1.5",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "2",
              target: "Improve balance",
              value: 6
            },
            {
              source: "2",
              target: "Improve cardiorespiratory fitness",
              value: 18
            },
            {
              source: "2",
              target: "Improve cognitive function",
              value: 18
            },
            {
              source: "2",
              target: "Improve flexibility",
              value: 4
            },
            {
              source: "2",
              target: "Improve functional fitness",
              value: 8
            },
            {
              source: "2",
              target: "Improve happiness levels",
              value: 6
            },
            {
              source: "2",
              target: "Improve mental health",
              value: 5
            },
            {
              source: "2",
              target: "Improve muscular fitness",
              value: 13
            },
            {
              source: "2",
              target: "Improve quality of life",
              value: 29
            },
            {
              source: "2",
              target: "Improve severity of anxiety symptoms",
              value: 29
            },
            {
              source: "2",
              target: "Improve severity of depressive symptoms",
              value: 102
            },
            {
              source: "2",
              target: "Improve severity of depressive symptoms;Improve happiness levels",
              value: 1
            },
            {
              source: "2",
              target: "Improve severity of depressive symptoms;Improve quality of life",
              value: 1
            },
            {
              source: "2",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "2",
              target: "Improve sleep quality",
              value: 7
            },
            {
              source: "2",
              target: "Reduce cardiovascular risk factors",
              value: 3
            },
            {
              source: "2",
              target: "Reduce stress level",
              value: 5
            },
            {
              source: "3",
              target: "Improve balance",
              value: 14
            },
            {
              source: "3",
              target: "Improve cardiorespiratory fitness",
              value: 48
            },
            {
              source: "3",
              target: "Improve cognitive function",
              value: 17
            },
            {
              source: "3",
              target: "Improve flexibility",
              value: 4
            },
            {
              source: "3",
              target: "Improve functional fitness",
              value: 4
            },
            {
              source: "3",
              target: "Improve happiness levels",
              value: 11
            },
            {
              source: "3",
              target: "Improve mental health",
              value: 15
            },
            {
              source: "3",
              target: "Improve muscular fitness",
              value: 21
            },
            {
              source: "3",
              target: "Improve quality of life",
              value: 40
            },
            {
              source: "3",
              target: "Improve severity of anxiety symptoms",
              value: 37
            },
            {
              source: "3",
              target: "Improve severity of depressive symptoms",
              value: 187
            },
            {
              source: "3",
              target: "Improve sleep quality",
              value: 14
            },
            {
              source: "3",
              target: "Reduce cardiovascular risk factors",
              value: 9
            },
            {
              source: "3",
              target: "Reduce stress level",
              value: 8
            },
            {
              source: "4",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "4",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "4",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "4",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "4",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "4",
              target: "Improve severity of depressive symptoms",
              value: 11
            },
            {
              source: "4",
              target: "Improve sleep quality",
              value: 3
            },
            {
              source: "5",
              target: "Improve balance",
              value: 2
            },
            {
              source: "5",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "5",
              target: "Improve cognitive function",
              value: 2
            },
            {
              source: "5",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "5",
              target: "Improve functional fitness",
              value: 3
            },
            {
              source: "5",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "5",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "5",
              target: "Improve quality of life",
              value: 6
            },
            {
              source: "5",
              target: "Improve severity of anxiety symptoms",
              value: 4
            },
            {
              source: "5",
              target: "Improve severity of depressive symptoms",
              value: 22
            },
            {
              source: "5",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "5",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "5",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "5",
              target: "Reduce stress level",
              value: 1
            },
            {
              source: "6",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "6",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "6",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "6",
              target: "Improve severity of anxiety symptoms",
              value: 3
            },
            {
              source: "6",
              target: "Improve severity of depressive symptoms",
              value: 7
            },
            {
              source: "6",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "7",
              target: "Improve balance",
              value: 1
            },
            {
              source: "7",
              target: "Improve cardiorespiratory fitness",
              value: 3
            },
            {
              source: "7",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "7",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "7",
              target: "Improve flexibility;Improve functional fitness",
              value: 1
            },
            {
              source: "7",
              target: "Improve functional fitness",
              value: 2
            },
            {
              source: "7",
              target: "Improve mental health",
              value: 2
            },
            {
              source: "7",
              target: "Improve quality of life",
              value: 4
            },
            {
              source: "7",
              target: "Improve severity of anxiety symptoms",
              value: 9
            },
            {
              source: "7",
              target: "Improve severity of depressive symptoms",
              value: 25
            },
            {
              source: "7",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "7",
              target: "Improve severity of depressive symptoms;Improve severity of anxiety symptoms;Reduce stress level",
              value: 1
            },
            {
              source: "7",
              target: "Improve sleep quality",
              value: 3
            },
            {
              source: "7",
              target: "Reduce cardiovascular risk factors",
              value: 2
            },
            {
              source: "7",
              target: "Reduce stress level",
              value: 2
            },
            {
              source: "1",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "1",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "1",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1 session/month",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1 session/week",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1(every other week)",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1-2",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "1-2",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "1-3",
              target: "Improve happiness levels",
              value: 1
            },
            {
              source: "1-3",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "1-3",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1-4 session/month",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "1-4 session/month",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "1-7",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "14(twice a day)",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "14(twice a day)",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "14sessions(7days)",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "14sessions(7days)",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "14sessions(7days)",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "2 or 3",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "2 or 3",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "2-3",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "2-3",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "2-3",
              target: "Improve quality of life",
              value: 2
            },
            {
              source: "2-3",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "2-3",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "2-3",
              target: "Improve severity of depressive symptoms;Improve cognitive function",
              value: 1
            },
            {
              source: "2-3",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "2-4",
              target: "Improve cardiorespiratory fitness",
              value: 1
            },
            {
              source: "2-4",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "3-4",
              target: "Improve cardiorespiratory fitness",
              value: 2
            },
            {
              source: "3-4",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "3-4",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "3-5",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "3-5",
              target: "Improve severity of depressive symptoms",
              value: 3
            },
            {
              source: "3-5",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "3-6",
              target: "Reduce cardiovascular risk factors",
              value: 1
            },
            {
              source: "3\u20135",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "4\u20136",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "7days(14sessions)",
              target: "Improve muscular fitness",
              value: 1
            },
            {
              source: "7days(14sessions)",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "7days(21sessions)",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "7days(21sessions)",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "7days/21times",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u22641",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u2265 3",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "\u2265 3",
              target: "Improve severity of anxiety symptoms",
              value: 1
            },
            {
              source: "\u2265 3",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "\u22652",
              target: "Improve balance",
              value: 1
            },
            {
              source: "\u22652",
              target: "Improve cardiorespiratory fitness;Improve muscular fitness",
              value: 1
            },
            {
              source: "\u22652",
              target: "Improve flexibility",
              value: 1
            },
            {
              source: "\u22652",
              target: "Improve functional fitness",
              value: 1
            },
            {
              source: "\u22652",
              target: "Improve mental health",
              value: 1
            },
            {
              source: "\u22652",
              target: "Improve quality of life",
              value: 3
            },
            {
              source: "\u22652",
              target: "Improve severity of anxiety symptoms",
              value: 2
            },
            {
              source: "\u22652",
              target: "Improve severity of depressive symptoms",
              value: 7
            },
            {
              source: "\u22653",
              target: "Improve quality of life",
              value: 1
            },
            {
              source: "\u22653",
              target: "Improve severity of depressive symptoms",
              value: 2
            },
            {
              source: "\u22653",
              target: "Improve sleep quality",
              value: 1
            },
            {
              source: "\u22654",
              target: "Improve severity of depressive symptoms",
              value: 1
            },
            {
              source: "\u22655",
              target: "Improve cognitive function",
              value: 1
            },
            {
              source: "\u22655",
              target: "Improve severity of depressive symptoms",
              value: 2
            }
          ]
        }
      };

      try {
        // 定义图表元素和对应的配置
        const chartConfigs = [
          { id: "chart_1", option: option },
          { id: "chart_2", option: option2 },
          { id: "chart_3", option: option3 },
          { id: "chart_4", option: option4 },
          { id: "chart_5", option: option5 },
          { id: "chart_6", option: option6 },
          { id: "chart_7", option: option7 },
          // { id: "chart_8", option: option8 },
        ];

        // 加载世界地图数据并注册
        const worldJson = await fetch('/depression_pa_kb/data/worldEN.json').then(res => res.json());
        echarts.registerMap('World', worldJson);
        console.log('World map data loaded:', worldJson);

        // 初始化并设置每个图表
        chartConfigs.forEach(({ id, option }) => {
          const chartElement = document.getElementById(id);
          if (chartElement) {
            const myChart = echarts.init(chartElement);
            if (option) {
              myChart.setOption(option);
              console.log(`${id} 已挂载并初始化`);
            }
          } else {
            console.log(`${id} 未挂载`);
          }
        });


        
      } catch (error) {
        console.error('Error initializing charts:', error);
      }
    });

    return {};
  }
});
</script>

<template>
  <n-space vertical size="large">
  <n-layout>
    <n-layout-content style="display: flex; justify-content: center; align-items: center; padding: 24px; position: relative;width: 1010px;margin-left: auto; margin-right: auto;">
        <n-gradient-text :size="60" type="info">
    Statistics
  </n-gradient-text>
      <div style="width: 100%;">
        <div id="chart_1" style="width: 810px;height: 600px;margin-top: 50px;"></div>

        <div id="chart_2" style="width: 810px;height: 600px;margin-top: 50px;"></div>
      
        <div id="chart_3" style="width: 810px;height: 600px;margin-top: 50px;"></div>

        <div id="chart_4" style="width: 810px;height: 800px;margin-top: 50px;"></div>

        <div id="chart_5" style="width: 810px;height: 800px;margin-top: 50px;"></div>

        <div id="chart_6" style="width: 810px;height: 1000px;margin-top: 50px;"></div>

        <div id="chart_7" style="width: 810px;height: 1000px;margin-top: 50px;"></div>
        <!-- <div id="chart_7" style="width: 810px;height: 600px;margin-top: 50px;"></div> -->

        <!-- <div id="chart_8" style="width: 810px;height: 400px;margin-top: 50px;"></div> -->
      </div>
      
    </n-layout-content>  
  </n-layout>
</n-space>
</template>

<!-- scoped关键词是限定样式的作用范围 -->
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
</style>
