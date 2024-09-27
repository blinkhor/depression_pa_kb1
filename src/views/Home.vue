<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {
      DPAoptions: [
        {
          label: 'Depression overview and impact',
          key: 'Depression overview and impact',
        },
        {
          label: 'The benefits of physical activity for depression',
          key: "The benefits of physical activity for depression"
        }
      ],
      Datebase_options: [
        {
          label: 'Depression information',
          key: '1',
        },
        {
          label: 'Baseline information',
          key: "2",
        },
        {
          label: 'Exercise risk assessment',
          key: '3',
        },
        {
          label: 'Physical fitness assessment',
          key: "4",
        },
        {
          label: 'Physical activity intervention protocol',
          key: '5',
        },
        {
          label: 'Adverse events evaluation',
          key: "6",
        },
        {
          label: 'Physical activity effect evaluation',
          key: "7",
        }
      ],
      handleSelect (key: string | number) {
        console.log(key)
      }
    }
  }
})

</script>

<template>

<n-space vertical size="large">

  <n-layout>

    <n-layout-content>
      <div style="padding: 0 16%; font-size: 15px">
        <p>
          The Personalized Exercise Prescription Recommendation Knowledge database for Depression (PEPRKD) comprehensively integrates and continuously updates information about depression and physical activity, including information on depression/depressive disorders or depressive symptoms, comorbidities (mental disease), underlying diseases, pre-exercise fitness assessment and risk assessment, exercise regimen, adverse events, and post-exercise evaluation. The purpose of PEPRKD is to provide reference and evidence for the formulation of personalized exercise prescriptions for individuals with depression/depressive disorders or depressive symptoms.
        </p>
        <n-gradient-text :size="60" type="info">
          
        </n-gradient-text>
      </div>

    <div class="button_container">
      <div class="button_item">
        <h2>Self-testing for depression</h2>
        <div class="images">
          <a href="https://www.hiv.uw.edu/page/mental-health-screening/phq-9" target="_blank">
            <img src="../assets/b1.png" style="width: 320px;" alt="Logo" />
          </a>
          <h2>or</h2>
          <a href="https://psychology-tools.com/test/zung-depression-scale" target="_blank">
            <img src="../assets/b2.png" style="width: 320px;" alt="Logo" />
          </a>
        </div>
      </div>
    </div>



      <!-- <div class="guideline_container">
        <div class="guideline_item">
          <a href="https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription/" target="_blank">
            <img src="..\assets\1.png"  alt="Logo" />
          </a>
          <p class="text">ACSM's Guidelines for Exercise Testing and Prescription</p>
        </div>
        <div class="guideline_item">
          <a href="https://doi.org/10.1176/appi.books.9780890425596" target="_blank">
            <img src="..\assets\2.png"  alt="Logo" />
          </a>
          <p class="text">American Psychiatric Association (APA). Diagnostic and statistical manual of mental disorders. 5th ed.</p>
        </div>
        <div class="guideline_item">
          <a href="https://www.who.int/publications/i/item/9241544228" target="_blank">
            <img src="..\assets\3.png"  alt="Logo" />
          </a>
          <p class="text">The ICD-10 Classification of Mental and Behavioural Disorders: Clinical descriptions and diagnostic guidelines</p>
        </div>
        <div class="guideline_item">
          <a href="https://www.acponline.org/clinical-information/guidelines/inactive-acp-guidelines" target="_blank">
            <img src="..\assets\4.png"  alt="Logo" />
          </a>
          <p class="text">Nonpharmacologic and Pharmacologic Treatments of Adults in the Acute Phase of Major Depressive Disorder: A Living Clinical Guideline From the American College of Physicians</p>
        </div>
        <div class="guideline_item">
          <a href="https://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd-1410197717630.pdf" target="_blank">
            <img src="..\assets\5.png"  alt="Logo" />
          </a>
          <p class="text">Practice Guideline for the Treatment of Patients With Major Depressive Disorder-Third Edition</p>
        </div>
        <div class="guideline_item">
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4994787/" target="_blank">
            <img src="..\assets\6.png"  alt="Logo" />
          </a>
          <p class="text">Canadian Network for Mood and Anxiety Treatments (CANMAT) 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorde</p>
        </div>
        <div class="guideline_item">
          <a href="https://pubmed.ncbi.nlm.nih.gov/30257806/" target="_blank">
            <img src="..\assets\7.png"  alt="Logo" />
          </a>
          <p class="text">EPA guidance on physical activity as a treatment for severe mental illness: a meta-review of the evidence and Position Statement from the European Psychiatric Association (EPA)</p>
        </div>
      </div> -->


      <n-card content-style="padding: 0;">
        <n-tabs
          type="line"
          size="large"
          :tabs-padding="20"
          pane-style="padding: 20px;"
          justify-content="end"
        >
          <n-tab-pane name="<">
            <div class="guideline_container">
            <div class="guideline_item">
              <a href="https://www.acsm.org/education-resources/books/guidelines-exercise-testing-prescription/" target="_blank">
                <img src="..\assets\1.png"  alt="Logo" />
              </a>
              <p class="text">ACSM's Guidelines for Exercise Testing and Prescription</p>
            </div>
            <div class="guideline_item">
              <a href="https://doi.org/10.1176/appi.books.9780890425596" target="_blank">
                <img src="..\assets\2.png"  alt="Logo" />
              </a>
              <p class="text">American Psychiatric Association (APA). Diagnostic and statistical manual of mental disorders. 5th ed.</p>
            </div>
            <div class="guideline_item">
              <a href="https://www.who.int/publications/i/item/9241544228" target="_blank">
                <img src="..\assets\3.png"  alt="Logo" />
              </a>
              <p class="text">The ICD-10 Classification of Mental and Behavioural Disorders: Clinical descriptions and diagnostic guidelines</p>
            </div>
            <div class="guideline_item">
              <a href="https://www.acponline.org/clinical-information/guidelines/inactive-acp-guidelines" target="_blank">
                <img src="..\assets\4.png"  alt="Logo" />
              </a>
              <p class="text">Nonpharmacologic and Pharmacologic Treatments of Adults in the Acute Phase of Major Depressive Disorder: A Living Clinical Guideline From the American College of Physicians</p>
            </div>
            </div>
          </n-tab-pane>
          <n-tab-pane name=">">
            <div class="guideline_container">
              <div class="guideline_item">
                <a href="https://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd-1410197717630.pdf" target="_blank">
                  <img src="..\assets\5.png"  alt="Logo" />
                </a>
                <p class="text">Practice Guideline for the Treatment of Patients With Major Depressive Disorder-Third Edition</p>
              </div>
              <div class="guideline_item">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4994787/" target="_blank">
                  <img src="..\assets\6.png"  alt="Logo" />
                </a>
                <p class="text">Canadian Network for Mood and Anxiety Treatments (CANMAT) 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorde</p>
              </div>
              <div class="guideline_item">
                <a href="https://pubmed.ncbi.nlm.nih.gov/30257806/" target="_blank">
                  <img src="..\assets\7.png"  alt="Logo" />
                </a>
                <p class="text">EPA guidance on physical activity as a treatment for severe mental illness: a meta-review of the evidence and Position Statement from the European Psychiatric Association (EPA)</p>
              </div>
              <div class="guideline_item">
                <a href="https://www.nice.org.uk/guidance/ng222/chapter/Recommendations#choice-of-treatments" target="_blank">
                  <img src="..\assets\8.png"  alt="Logo" />
                </a>
                <p class="text">Depression in adults: treatment and management</p>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-layout-content>



  </n-layout>
</n-space>
</template>

<!-- scoped关键词是限定样式的作用范围 -->
<style scoped>
.logo {
  height: 3.5em; /* 设置logo的高度为6em */
  padding: 0em; /* 设置logo的内边距为1.5em */
  will-change: filter; /* 声明filter属性将会被改变 */
  transition: filter 300ms; /* 设置过渡效果，当filter属性改变时，过渡时间为300毫秒 */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #242424); /* 当鼠标悬停在logo上时，添加一个2em的阴影效果，颜色为#ecf0f1 */
}


.background-image {
  position: relative;
  width: 10%;
  height: 0;
  padding-bottom: 56.25%; /* Adjust this to match the aspect ratio of the image */
  background-image: url('../assets/navi.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}



.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99BC8A;
  padding: 0 16%;
  height: 120px;
  text-align: center;
}

.guideline_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 100%;
  /* background-color: #D5E3D4; */
}

.guideline_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.guideline_item img {
  width: 70%;
}

.button_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 60px;
}

.button_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;
  background-color: #EFFCED;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.images h2 {
  margin: 0 20px;
}


.guideline_item .text {
  margin-top: 10px;
}
</style>
