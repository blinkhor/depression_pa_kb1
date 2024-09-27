// @ts-nocheck
<script lang="ts">
import { defineComponent, ref, watch, onMounted, Ref} from 'vue';
import { useRouter } from 'vue-router';

interface DisabledTabs {
  [key: string]: boolean;
}

interface FormData {
  sex: string;
  age: string;
  weight: number;
  height: number;
  depressionClassification: string;
  comorbidity: string;
  underlyingDiseases: string;
  symptoms: string[];
  currentActivity: string;
  medicalConditions: string[];
  goals: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const activeTab = ref('Step1');
    const disabledTabs = ref<DisabledTabs>({
      Step1: false,
      Step2: true,
      Step3: true,
      Step4: true,
      Step5: true,
    });
    const sex_value = ref('null');
    const age_value = ref('null');
    const weight_value = ref(0);
    const height_value = ref(0);
    const Depression_classification = ref('');
    const Comorbidity = ref('');
    const Underlying_diseases = ref('null');
    const Symptoms = ref<string[]>([]);
    const Current_activity = ref('null');
    const Medical_conditions = ref<string[]>([]);
    const Goals = ref('null');

    const formData = ref<FormData>({
      sex: 'null',
      age: 'null',
      weight: 0,
      height: 0,
      depressionClassification: '',
      comorbidity: '',
      underlyingDiseases: 'null',
      symptoms: [],
      currentActivity: 'null',
      medicalConditions: [],
      goals: 'null',
    });

    const showModalRef = ref(false);
    const showAlert = ref('');
    const disableNextButton = ref<boolean>(false);

    const handleNext = (nextTab: string) => {
      // 保存当前表单数据的逻辑
      if (activeTab.value === 'Step1') {
        formData.value.sex = sex_value.value;
        formData.value.age = age_value.value;
        formData.value.weight = weight_value.value;
        formData.value.height = height_value.value;
      } else if (activeTab.value === 'Step2') {
        formData.value.depressionClassification = Depression_classification.value;
        formData.value.comorbidity = Comorbidity.value;
        formData.value.underlyingDiseases = Underlying_diseases.value;
      } else if (activeTab.value === 'Step4') {
        formData.value.symptoms = Symptoms.value;
        formData.value.currentActivity = Current_activity.value;
        formData.value.medicalConditions = Medical_conditions.value;
      } else if (activeTab.value === 'Step5') {
        formData.value.goals = Goals.value;
      }
      //跳转到下一页
      disabledTabs.value[nextTab] = false;
      activeTab.value = nextTab;

      console.log('Current Form Data:', formData.value);
    };

    const handlePrevious = (prevTab: string) => {
      activeTab.value = prevTab;
    };

    const handleNextWithModal = (_nextTab: string) => {
      // handleNext(nextTab)
      showModalRef.value = true;
    };

    const generatePrescription = () => {
      formData.value.goals = Goals.value;

      console.log('Final Form Data:', formData.value);

      // 收集所有与选择匹配的 PMID
      const pmidSets = []; // 用于存储每个条件下的 PMIDs 列表

        // 根据年龄选择的性别获取对应的 PMIDs
      if (formData.value.age && age.value[formData.value.age]) {
        pmidSets.push(new Set(age.value[formData.value.age])); // 将 PMIDs 转为 Set 并添加到数组中
      }

      // 根据用户选择的性别获取对应的 PMIDs
      if (formData.value.sex && sex.value[formData.value.sex]) {
        pmidSets.push(new Set(sex.value[formData.value.sex]));
      }

      const bmi_value = formData.value.weight / ((formData.value.height / 100) * (formData.value.height/ 100));
      // 根据 BMI 值分类
      let bmi_class = '';

      if (bmi_value < 18.5) {
        bmi_class = '＜18.5'; // ＜18.5
      } else if (bmi_value >= 18.5 && bmi_value < 25) {
        bmi_class = '18.5-24.99'; // 18.5-24.99
      } else if (bmi_value >= 25 && bmi_value < 30) {
        bmi_class = '25-29.99'; // 25-29.99
      } else if (bmi_value >= 30) {
        bmi_class = '≥30'; // ≥30
      }

      // 根据BMI分类获取对应的 PMIDs
      if (bmi_class && bmi.value[bmi_class]) {
        pmidSets.push(new Set(bmi.value[bmi_class]));
      }

      // 根据抑郁分类获取对应的 PMIDs
      if (formData.value.depressionClassification && d_class.value[formData.value.depressionClassification]) {
        pmidSets.push(new Set(d_class.value[formData.value.depressionClassification]));
      }

      // 根据合并症获取对应的 PMIDs
      if (formData.value.comorbidity && comorbidity.value[formData.value.comorbidity]) {
        pmidSets.push(new Set(comorbidity.value[formData.value.comorbidity]));
      }

      // 根据基础疾病列表获取对应的 PMIDs
      if (Array.isArray(formData.value.underlyingDiseases)) {
        formData.value.underlyingDiseases.forEach((disease) => {
          if (underling_dis.value[disease]) {
            pmidSets.push(new Set(underling_dis.value[disease]));
          }
        });
      }

      // 根据目标获取对应的 PMIDs
      if (Array.isArray(formData.value.goals)) {
        formData.value.goals.forEach((goal) => {
          if (effect_class_count.value[goal]) {
            pmidSets.push(new Set(effect_class_count.value[goal]));
          }
        });
      }

      // 计算交集
      let matchedPmids = [];
      if (pmidSets.length > 0) {
        matchedPmids = [...pmidSets.reduce((acc, set) => new Set([...acc].filter(x => set.has(x))))];
      }

      console.log('Matched PMIDs:', matchedPmids);

        // 使用 Vue Router 传递数据到新页面
      router.push({
        name: 'PE_detail', // 目标页面的路由名称，需要在路由配置中定义
        query: { pmids: matchedPmids.join(',') }, // 将 PMIDs 作为查询参数传递
      });


    };


    const checkForm = () => {
      if (Symptoms.value.length > 0) {
        showAlert.value = "Stop generating personalized exercise prescription reference protocols! You should seek medical clearance before engaging in or resuming exercise. You may also need to use a facility with a medically qualified staff.";
        disableNextButton.value = true;
      } else if (Current_activity.value === 'Yes' && Medical_conditions.value.length === 0) {
        showAlert.value = "Medical clearance is not necessary.";
        disableNextButton.value = false;
      } else if (Current_activity.value === 'Yes' && Medical_conditions.value.length > 0) {
        showAlert.value = "Continue to exercise at light to moderate intensity without medical clearance. You should get approval from a health care professional to engage in vigorous exercise!";
        disableNextButton.value = false;
      } else if (Current_activity.value === 'No' && Medical_conditions.value.length === 0) {
        showAlert.value = "Medical clearance is not necessary.";
        disableNextButton.value = false;
      } else if (Current_activity.value === 'No' && Medical_conditions.value.length > 0) {
        showAlert.value = "Stop generating personalized exercise prescription reference protocols! You should seek medical clearance before engaging in exercise. You may also need to use a facility with a medically qualified staff.";
        disableNextButton.value = true;
      } else {
        showAlert.value = '';
        disableNextButton.value = false;
      }
    };

    watch(Symptoms, checkForm);
    watch(Current_activity, checkForm);
    watch(Medical_conditions, checkForm);

    const sex = ref([]);
    const age = ref([]);
    const bmi = ref([]);
    const d_class = ref([]);
    const comorbidity = ref([]);
    const underling_dis = ref([]);
    const effect_class_count = ref([]);

    const loadJsonData = async (path: string, refVar: Ref<any[]>) => {
      try {
        const response = await fetch(path);
        refVar.value = await response.json();
        console.log(`成功读取 ${path}`);
        console.log(refVar.value);
      } catch (error) {
        console.error(`读取 ${path} 时出错:`, error);
      }
    };

    onMounted(() => {
    // 调用 loadJsonData 读取各个 JSON 文件
    loadJsonData('/depression_pa_kb/data/sex.json', sex);
    // console.log('sex:', sex.value);
    loadJsonData('/depression_pa_kb/data/age.json', age);
    // console.log('age:', age.value);
    loadJsonData('/depression_pa_kb/data/bmi.json', bmi);
    // console.log('bmi:', bmi.value);
    loadJsonData('/depression_pa_kb/data/D_class.json', d_class);
    // console.log('d_class:', d_class.value);
    loadJsonData('/depression_pa_kb/data/Comorbidity.json', comorbidity);
    // console.log('comorbidity:', comorbidity.value);
    loadJsonData('/depression_pa_kb/data/Underling_dis.json', underling_dis);
    // console.log('underling_dis:', underling_dis.value);
    loadJsonData('/depression_pa_kb/data/Effect_class_count.json', effect_class_count);
    // console.log('effect_class_count:', effect_class_count.value);
  });



    return {
      showModal: showModalRef,
      onPositiveClick: ref(false),
      disabledTabs,
      activeTab,
      sex_value,
      age_value,
      weight_value,
      height_value,
      Depression_classification,
      Comorbidity,
      Underlying_diseases,
      Symptoms,
      Current_activity,
      Medical_conditions,
      Goals,
      showAlert,
      disableNextButton,
      handleNextWithModal,
      handleNext,
      handlePrevious,
      generatePrescription,
      checkForm,
    };
  },
});
</script>

<template>
  <n-space vertical size="large" class="container">
    <n-layout-content style="padding: 24px; position: relative; width: 1250px; height: 100%; margin-left: auto; margin-right: auto;">
      <n-card>
        <n-gradient-text :size="60" type="info">
          Personalized exercise prescription
        </n-gradient-text>
        <p>
          Now, we are happy to recommend a personalized exercise prescription for you! Before this, you need to input the relevant information in steps and complete the suicide risk assessment and exercise preparticipation health screening questionnaire, and then the tool will automatically match and output all exercise prescriptions that match your characteristics.
        </p>
      </n-card>

      <n-tabs v-model:value="activeTab" justify-content="space-evenly" type="line" animated>
        
        <!-- step1 -->
        <n-tab-pane name="Step1" tab="Step1" :disabled="disabledTabs.Step1">
          <p>Step1 Baseline information</p>
          <n-form>
            <n-form-item label="Sex:" label-style="font-weight: bold;">
              <n-radio-group v-model:value="sex_value" name="Sex">
                <n-radio value="male" label="Male" name="Sex">Male</n-radio>
                <n-radio value="female" label="Female" name="Sex">Female</n-radio>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="Age(Years):" label-style="font-weight: bold;">
              <n-radio-group v-model:value="age_value" name="Age">
                <n-radio value="<18" label="<18" name="18<">&lt18</n-radio>
                <n-radio value="18-65" label="18-65" name="18-65">18-65</n-radio>
                <n-radio value=">65" label=">65" name=">65">>65</n-radio>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="Height(cm):" label-style="font-weight: bold;">
              <n-input-number v-model:value="height_value" :show-button="false" />
            </n-form-item>
            <n-form-item label="Weight(kg):" label-style="font-weight: bold;">
              <n-input-number v-model:value="weight_value" :show-button="false" />
            </n-form-item>
          </n-form>
          <div class="button-container">
            <n-button type="primary" block secondary strong @click="handleNext('Step2')">Next</n-button>
          </div>
        </n-tab-pane>

        <!-- step2 -->
        <n-tab-pane name="Step2" tab="Step2" :disabled="disabledTabs.Step2">
          <p>Step2 Depression and comorbidity information</p>
          <n-form>
            <n-form-item label="Depression classification:" label-style="font-weight: bold;">
              <n-radio-group v-model:value="Depression_classification" name="Depression_classification">
                <n-space vertical item-style="display: block;">
                  <n-radio value="depressive disorder/depression" label="Depressive disorder / Depression" />
                  <n-radio value="subthreshold depression" label="Subthreshold depression" />
                  <n-radio value="depressive symptoms" label="Depressive symptoms" />
                  <n-radio value="perinatal depression" label="Perinatal depression" />
                </n-space>
              </n-radio-group>
            </n-form-item>

            <n-form-item label="Comorbidity:" label-style="font-weight: bold;">
              <n-radio-group v-model:value="Comorbidity" name="Comorbidity">
                <n-space vertical item-style="display: block;">
                  <n-radio value="anxiety" label="Anxiety" />
                  <n-radio value="no" label="No" />
                </n-space>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="Underlying diseases:*" label-style="font-weight: bold;">
              <n-checkbox-group v-model:value="Underlying_diseases" name="Underlying_diseases">
              <n-checkbox value="neurological disorders" label="Neurological disorders">Neurological disorders</n-checkbox>
              <n-checkbox value="any type of cancer" label="Any type of cancer">Any type of cancer</n-checkbox>
              <n-checkbox value="cardiovascular disease" label="Cardiovascular disease">Cardiovascular disease</n-checkbox>
              <n-checkbox value="stroke" label="Stroke">Stroke</n-checkbox>
              <n-checkbox value="end-stage renal disease" label="End-stage renal disease">End-stage renal disease</n-checkbox>
              <n-checkbox value="diabetes" label="Diabetes">Diabetes</n-checkbox>
              <n-checkbox value="chronic pain" label="Chronic pain">Chronic pain</n-checkbox>
              <n-checkbox value="hiv" label="HIV">HIV</n-checkbox>
              <n-checkbox value="overweight or obese" label="Overweight or obese">Overweight or obese</n-checkbox>
              <n-checkbox value="other" label="Other">Other</n-checkbox>
              <n-checkbox value="no" label="No">No</n-checkbox>
            </n-checkbox-group>

            </n-form-item>

          </n-form>

          <div class="footnote">* Underlying diseases: physical illness other than a mental disease.</div>
          <div class="button-container"> 
            <n-button @click="handlePrevious('Step1')">Previous</n-button>
            <n-button type="primary" block secondary strong @click="handleNext('Step3')">Next</n-button>
          </div>
        </n-tab-pane>

        <!-- step3 -->
        <n-tab-pane name="Step3" tab="Step3" :disabled="disabledTabs.Step3">
          <p>Step3 Suicide risk assessment</p>
          <a href="https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/about-the-scale/" target="_blank">
            <img src="../assets/pep_step3.jpg" style="width: 50%;" alt="Logo" />
          </a>
          <a href="https://cssrs.columbia.edu/the-columbia-scale-c-ssrs/about-the-scale/" target="_blank">
            <img src="../assets/b2.png" style="width: 23%;" alt="Logo" />
          </a>
          <div class="button-container">
            <n-button @click="handlePrevious('Step2')">Previous</n-button>
            <n-button type="primary" block secondary strong @click="handleNextWithModal('Step4')">Next</n-button>
          </div>

          <n-modal
            v-model:show="showModal"
            :mask-closable="false"
            preset="dialog"
            title="High suicide risk notice"
            content="Whether there is currently a high risk of suicide"
            positive-text="YES"
            negative-text="NO"
            @positive-click="onPositiveClick = true"
            @negative-click="handleNext('Step4')"
          />
          <n-modal v-model:show="onPositiveClick">
            <n-card
              style="width: 600px"
              title="Please seek help from a psychiatrist in time"
              :bordered="false"
              size="huge"
              role="dialog"
              aria-modal="true"
            >
              You should seek the help of a psychiatrist immediately to develop a comprehensive treatment plan. Until then, we cannot further develop exercise prescriptions!
            </n-card>
          </n-modal>
        </n-tab-pane>

        <!-- step4 -->
        <n-tab-pane name="Step4" tab="Step4" :disabled="disabledTabs.Step4">
        <p>Step4 Exercise preparticipation health screening questionnaire*</p>
        <n-form>
          <n-form-item label="I SYMPTOMS" label-style="font-weight: bold;">
            <n-checkbox-group v-model:value="Symptoms" name="Symptoms">
              <p style="color: gray; font-size: 0.75em;">
                If you don't have any symptoms you don't have to select any options!
              </p>
              <n-space vertical item-style="display: block;">
                <n-checkbox value="Chest discomfort with exertion" label="Chest discomfort with exertion" @change="checkForm" />
                <n-checkbox value="Unreasonable breathlessness" label="Unreasonable breathlessness" @change="checkForm" />
                <n-checkbox value="Dizziness, fainting, blackouts" label="Dizziness, fainting, blackouts" @change="checkForm" />
                <n-checkbox value="Ankle swelling" label="Ankle swelling" @change="checkForm" />
                <n-checkbox value="Unpleasant awareness of a forceful, rapid or irregular heart rate" 
                            label="Unpleasant awareness of a forceful, rapid or irregular heart rate" 
                            @change="checkForm" />
                <n-checkbox value="Burning or cramping sensations in your lower legs when walking short distance" 
                            label="Burning or cramping sensations in your lower legs when walking short distance" 
                            @change="checkForm" />
                <n-checkbox value="Known heart murmur" label="Known heart murmur" @change="checkForm" />
              </n-space>
            </n-checkbox-group>

          </n-form-item>

          <n-form-item label="II CURRENT ACTIVITY" label-style="font-weight: bold;">
            <n-radio-group v-model:value="Current_activity" name="Current_activity">
              <p style="color: black; font-size: 0.75em;">
                Participates in regular exercise (Performing planned, structured physical activity at least 30 min at moderate intensity* on at least 3 days per week for at least the last 3 months.)
              </p>
              <n-radio value="Yes" label="Yes" @change="checkForm">Yes</n-radio>
              <n-radio value="No" label="No" @change="checkForm">No</n-radio>
              <div class="footnote" style="margin-top:20px">* moderate intensity: 64%–76% maximal heart rate [HRmax] or 40%–60% heart rate reserve [HRR], an intensity that causes noticeable increases in HR and breathing.</div>
            </n-radio-group>
          </n-form-item>

          <n-form-item label="III MEDICAL CONDITIONS" label-style="font-weight: bold;">
            <n-checkbox-group v-model:value="Medical_conditions" name="Medical_conditions">
              <p style="color: gray; font-size: 0.75em;">
                Has the subject had or currently have: (If not, you don't have to select any options)
              </p>
              <n-space vertical item-style="display: block;">
                <n-checkbox value="A heart attack" label="A heart attack" @change="checkForm" />
                <n-checkbox value="Heart surgery, cardiac catheterization, or coronary angioplasty" 
                            label="Heart surgery, cardiac catheterization, or coronary angioplasty" 
                            @change="checkForm" />
                <n-checkbox value="Pacemaker / implantable cardiac defibrillator / rhythm disturbance" 
                            label="Pacemaker / implantable cardiac defibrillator / rhythm disturbance" 
                            @change="checkForm" />
                <n-checkbox value="Heart valve disease" label="Heart valve disease" @change="checkForm" />
                <n-checkbox value="Heart failure" label="Heart failure" @change="checkForm" />
                <n-checkbox value="Heart transplantation" label="Heart transplantation" @change="checkForm" />
                <n-checkbox value="Congenital heart disease" label="Congenital heart disease" @change="checkForm" />
                <n-checkbox value="Diabetes" label="Diabetes" @change="checkForm" />
                <n-checkbox value="Renal disease" label="Renal disease" @change="checkForm" />
              </n-space>
            </n-checkbox-group>
          </n-form-item>
        </n-form>
        <div class="footnote">* Exercise preparticipation health screening questionnaire, Magal M, Riebe D. New preparticipation health screening recommendations: what exercise professionals need to know. ACSM Health Fitness J. 2016;20(3):22–7.doi: 10.1249/FIT.0000000000000202.</div>
        <n-alert style="margin-top:25px" v-if="showAlert" :title="showAlert" type="warning">
        </n-alert>
        <div class="button-container">
          <n-button @click="handlePrevious('Step3')">Previous</n-button>
          <n-button type="primary" block secondary strong @click="handleNext('Step5')" :disabled="disableNextButton">Next</n-button>
        </div>
        </n-tab-pane>


        <!-- step5 -->
        <n-tab-pane name="Step5" tab="Step5" :disabled="disabledTabs.Step5">
          <p>Step5 Desired exercise goals</p>
          <n-form>
            <n-form-item label="Desired exercise goals:" label-style="font-weight: bold;">
              <n-checkbox-group v-model:value="Goals" name="Goals">
                <n-space vertical item-style="display: block;">
                  <n-checkbox value="improve severity of depressive symptoms" label="Improve severity of depressive symptoms" />
                  <n-checkbox value="improve severity of anxiety symptoms" label="Improve severity of anxiety symptoms" />
                  <n-checkbox value="improve quality of life" label="Improve quality of life" />
                  <n-checkbox value="improve cardiorespiratory fitness" label="Improve cardiorespiratory fitness" />
                  <n-checkbox value="improve cognitive function" label="Improve cognitive function" />
                  <n-checkbox value="improve mental health" label="Improve mental health" />
                  <n-checkbox value="improve sleep quality" label="Improve sleep quality" />
                  <n-checkbox value="improve muscular fitness" label="Improve muscular fitness" />
                  <n-checkbox value="reduce stress level" label="Reduce stress level" />
                  <n-checkbox value="improve balance" label="Improve balance" />
                  <n-checkbox value="improve functional fitness" label="Improve functional fitness" />
                  <n-checkbox value="improve happiness levels" label="Improve happiness levels" />
                  <n-checkbox value="reduce cardiovascular risk factors" label="Reduce cardiovascular risk factors" />
                  <n-checkbox value="improve flexibility" label="Improve flexibility" />
                </n-space>
              </n-checkbox-group>
            </n-form-item>
          </n-form>
          <div class="button-container">
            <n-button type="primary" block strong @click="generatePrescription">Submit</n-button>
          </div>
        </n-tab-pane>
      </n-tabs>
    </n-layout-content>
  </n-space>
</template>

<style scoped>
/* Layout and spacing */
.n-layout-content {
  gap: 20px; /* Spacing between elements */
  padding: 24px;
  width: 750px;
  margin: 0 auto; /* Centering */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow */
  border-radius: 8px; /* Rounded corners */
  background: #fff; /* Light background */
}

/* Typography */
p {
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #99BC8A;
}
.n-gradient-text {
  font-size: 24px; /* 增大字号 */
  font-weight: bold; /* 加粗 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 20px; /* 与下方元素的间距 */
  background: linear-gradient(90deg, #D5E3D4, #56ab2f); /* 浅绿色渐变色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* 渐变文字颜色 */
}
/* Form elements */
a img {
  max-width: 50%; /* Responsive image */
  height: auto;
  display: block; /* Remove bottom space */
  margin: 0 auto; /* Centering */
}

.footnote{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #D5E3D4;
}

.button-container {
  display: flex;
  justify-content: center; /* Center the buttons by default */
  margin-top: 20px; /* Add some space above the buttons if needed */
  gap: 20px; /* Add space between buttons */
}

.button-container > button {
  flex: 1;
  max-width: 150px; /* Adjust based on your button width */
}

/* When there are two buttons, apply space-between */
.button-container.two-buttons {
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;
}
</style>
