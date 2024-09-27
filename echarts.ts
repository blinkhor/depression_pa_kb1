// 引入 echarts 核心模块
import * as echarts from 'echarts/core';

// 引入柱状图、折线图、饼图、地图组件和桑基图组件
import { BarChart, LineChart, PieChart, MapChart, SankeyChart, TreeChart} from 'echarts/charts';

// 引入标题、提示框、网格、数据集、数据转换器、地理组件和视觉地图组件
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    GeoComponent,
    VisualMapComponent,
} from 'echarts/components';

// 引入标签布局和通用过渡动画特性
import { LabelLayout, UniversalTransition } from 'echarts/features';

// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers';

import type {
    BarSeriesOption,
    LineSeriesOption,
    MapSeriesOption,
    PieSeriesOption,
    SankeySeriesOption, // 添加桑基图类型
    TreeSeriesOption,   // 添加树图类型
} from 'echarts/charts';

import type {
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    DatasetComponentOption,
} from 'echarts/components';

import type { ComposeOption } from 'echarts/core';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type EChartsOption = ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | MapSeriesOption
    | PieSeriesOption
    | SankeySeriesOption  // 添加桑基图类型
    | TreeSeriesOption  // 添加树图类型
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;

/**
 * 注册必须的组件，包括标题、提示框、网格、数据集、数据转换器，
 * 以及柱状图、折线图、标签布局、通用过渡动画和 Canvas 渲染器
 */
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    MapChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent,
    PieChart,
    GeoComponent,
    VisualMapComponent,
    SankeyChart,       // 注册桑基图组件
    TreeChart,         // 注册树图组件
]);

// 导出
export default echarts;
