<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const DPAoptions = [
      {
        label: 'Depression overview and impact',
        key: 'Depression overview and impact',
        props: {
          onClick: () => {
            router.push('/depressionpa')
          } 
        }
      },
      {
        label: 'The benefits of physical activity for depression',
        key: 'The benefits of physical activity for depression',
        props: {
          onClick: () => {
            router.push('/depressionpa1')
          }
        }
      }
    ]

    const Datebase_options = [
      {
        label: 'Depression information',
        key: '1',
        props: {
          onClick: () => {
            router.push('/data_di')
          }
        }
      },
      {
        label: 'Baseline information',
        key: '2',
        props: {
          onClick: () => {
            router.push('/data_bi')
          }
        }
      },
      {
        label: 'Exercise risk assessment',
        key: '3',
        props: {
          onClick: () => {
            router.push('/data_era')
          }
        }
      },
      {
        label: 'Physical fitness assessment',
        key: '4',
        props: {
          onClick: () => {
            router.push('/data_pfa')
          }
        }
      },
      {
        label: 'Physical activity intervention protocol',
        key: '5',
        props: {
          onClick: () => {
            router.push('/data_paip')
          }
        }
      },
      {
        label: 'Adverse events evaluation',
        key: '6',
        props: {
          onClick: () => {
            router.push('/data_aee')
          }
        }
      },
      {
        label: 'Physical activity effect evaluation',
        key: '7',
        props: {
          onClick: () => {
            router.push('/data_paee')
          }
        }
      }
    ]

    const handleSelect = (key: string | number) => {
      console.log(key)
    }

    return { DPAoptions, Datebase_options, handleSelect }
  }
})
</script>

<template>
  <div class="page-container">
    <div class="main-content">
      <n-layout-header>
        <nav style="display: flex; align-items: center; justify-content: space-between; background-color: #99BC8A; padding: 0 16%; height: 90px;">
          <ul style="display: flex; align-items: center; gap: 20px; list-style: none;">
            <li>
              <n-button text tag="a" type="primary" @click="$router.push('/')">
                <img src=".\assets\logo.png" class="logo" alt="Logo" />
              </n-button>
            </li>
          </ul>
          <ul style="display: flex; align-items: center; gap: 30px; list-style: none;">
            <li>
              <n-dropdown trigger="click" :options="DPAoptions" placement="bottom-start" @select="handleSelect">
                <n-button text tag="a" type="primary">
                  <p class="navi">Depression and physical activity</p>
                </n-button>
              </n-dropdown>
            </li>
            <li>
              <n-dropdown trigger="click" :options="Datebase_options" placement="bottom-start" @select="handleSelect">
                <n-button text tag="a" type="primary">
                  <p class="navi">Database</p>
                </n-button>
              </n-dropdown>
            </li>
            <li>
              <n-button text tag="a" type="primary" @click="$router.push('/PE')">
                <p class="navi">Personalized exercise prescription</p>
              </n-button>
            </li>
            <li>
              <n-button text tag="a" type="primary" @click="$router.push('/Statistics')">
                <p class="navi">Statistics</p>
              </n-button>
            </li>
            <li>
              <n-button text tag="a" type="primary" @click="$router.push('/Help')">
                <p class="navi">Help</p>
              </n-button>
            </li>
            <li>
              <n-button text tag="a" type="primary" @click="$router.push('/Feedback')">
                <p class="navi">Feedback</p>
              </n-button>
            </li>
          </ul>
        </nav>
        <div class="background-image"></div>
      </n-layout-header>

      <router-view></router-view>
    </div>

    <n-layout-footer>
      <div class="footer">
        <div class="logo">
          <img src=".\assets\west_china_hospital.png" style="height: 5em" alt="Logo" />
        </div>
        <div class="copyright">
          Copyright©2023 Institutes for Systems Genetics Frontiers Science Center for Disease-related Molecular Network, West China Hospital, Sichuan University
          No.2222, Xinchuan Road, High-tech Zone, Chengdu. Postcode: 610212
        </div>
      </div>
    </n-layout-footer>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.logo {
  height: 4em;
  padding: 0em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #242424);
}

.navi {
  color: #3d3d3d;
  font-weight: bold;
  font-size: 1.5em;
}

.background-image {
  background-image: url('./assets/navi.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: auto;
  width: 100%;
}

.background-image::before {
  content: "";
  display: block;
  padding-top: 11%;
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
</style>

<style>
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
