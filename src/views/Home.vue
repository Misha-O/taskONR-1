<template>
  <v-container>
    <v-toolbar elevation="0" class="mb-15">
      <v-row>
        <v-col cols="12">
          <v-toolbar-title>
            PERFORMANCE MANAGEMENT
          </v-toolbar-title>
        </v-col>
        <v-col cols="12">
          <v-toolbar-title class="d-flex align-center grey lighten-2 pa-4">
            <v-icon left>mdi-web</v-icon>
            Diagnostic Tool
            <v-spacer></v-spacer>
            <v-icon>mdi-pin</v-icon>
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card elevation="0">
      <v-row>
        <v-col cols="3">
          <v-card-text>Filters</v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card-title v-show="currentGraph === 1"
            >{{ gaugeData[0].name }} trend</v-card-title
          >
          <v-card-title v-show="currentGraph === 2"
            >{{ gaugeData[1].name }} trend</v-card-title
          >
          <v-card-title v-show="currentGraph === 3"
            >{{ gaugeData[2].name }} trend</v-card-title
          >
          <v-card-title v-show="currentGraph === 4"
            >{{ gaugeData[3].name }} trend</v-card-title
          >
          <v-card-title v-show="currentGraph === 5"
            >{{ gaugeData[4].name }} trend</v-card-title
          >
          <v-card-title v-show="currentGraph === 6"
            >{{ gaugeData[5].name }} trend</v-card-title
          >
        </v-col>
        <v-col cols="5" class="d-flex align-center">
          <div>
            <v-btn small class="ma-1" color="primary">Day</v-btn>
            <v-btn small class="ma-1" color="primary">Week</v-btn>
            <v-btn small class="ma-1" color="primary">Month</v-btn>
            <v-btn small class="ma-1" color="primary">Quater</v-btn>
            <v-btn small class="ma-1" color="primary">Half</v-btn>
            <v-btn small class="ma-1" color="primary">Year</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="3">
        <v-card outlined elevation="0">
          <v-card-text
            ><v-icon color="primary" left>mdi-square</v-icon>All CQA Results
            <v-icon right>mdi-information</v-icon></v-card-text
          >
          <v-card-text
            ><v-icon color="primary" left>mdi-square</v-icon>CQAs with Closed
            Loop <v-icon right>mdi-information</v-icon></v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="9"></v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(1)">
              <v-card-title>{{ gaugeData[0].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[0].score }}%
                <h6 v-if="gaugeData[0].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[0].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[0].sample }}</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(2)">
              <v-card-title>{{ gaugeData[1].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[1].score }}%
                <h6 v-if="gaugeData[1].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[1].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[1].sample }}</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(3)">
              <v-card-title>{{ gaugeData[2].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[2].score }}%
                <h6 v-if="gaugeData[2].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[2].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[2].sample }}</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(4)">
              <v-card-title>{{ gaugeData[3].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[3].score }}%
                <h6 v-if="gaugeData[3].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[3].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[3].sample }}</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(5)">
              <v-card-title>{{ gaugeData[4].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[4].score }}%
                <h6 v-if="gaugeData[4].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[4].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[4].sample }}</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card style="cursor:pointer;" @click="setGraph(6)">
              <v-card-title>{{ gaugeData[5].name }}</v-card-title>
              <vc-donut
                :sections="sections"
                :size="100"
                unit="px"
                :total="100"
                :auto-adjust-text-size="true"
                >{{ gaugeData[5].score }}%
                <h6 v-if="gaugeData[5].vsly === null">N/A</h6>
                <h6 v-else>{{ gaugeData[5].vsly }}</h6>
              </vc-donut>

              <v-card-text class="text-center text-body-1 font-weight-bold"
                >Sampler: {{ gaugeData[5].sample }}</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-card elevation="1" v-show="currentGraph === 1">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </v-card>
        <v-card elevation="1" v-show="currentGraph === 2">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="seriesTwo"
          ></apexchart>
        </v-card>
        <v-card elevation="1" v-show="currentGraph === 3">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="seriesThree"
          ></apexchart>
        </v-card>
        <v-card elevation="1" v-show="currentGraph === 4">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="seriesFour"
          ></apexchart>
        </v-card>
        <v-card elevation="1" v-show="currentGraph === 5">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="seriesFive"
          ></apexchart>
        </v-card>
        <v-card elevation="1" v-show="currentGraph === 6">
          <apexchart
            type="area"
            height="300"
            :options="chartOptions"
            :series="seriesSix"
          ></apexchart>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentGraph: 1,
      sections: [{ color: "#1877f2", value: 75 }],
      gaugeData: [
        {
          name: "Quality Score",
          score: 72,
          vsly: null,
          sample: 133,
        },
        {
          name: "Basics",
          score: 71,
          vsly: null,
          sample: 133,
        },
        {
          name: "Interaction",
          score: 68,
          vsly: null,
          sample: 133,
        },
        {
          name: "Expertise",
          score: 70,
          vsly: null,
          sample: 133,
        },
        {
          name: "Process",
          score: 75,
          vsly: null,
          sample: 133,
        },
        {
          name: "Knowledge",
          score: 76,
          vsly: null,
          sample: 133,
        },
      ],
      areaData: {
        QualityScore: [
          {
            date: "Apr",
            sample: 21,
            score: 75,
            vsly: 0,
          },
          {
            date: "May",
            sample: 110,
            score: 71,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 62,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Basics: [
          {
            date: "Apr",
            sample: 29,
            score: 78,
            vsly: 0,
          },
          {
            date: "May",
            sample: 66,
            score: 62,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 42,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 51,
            score: 63,
            vsly: 0,
          },
        ],
        Interaction: [
          {
            date: "Apr",
            sample: 54,
            score: 92,
            vsly: 0,
          },
          {
            date: "May",
            sample: 110,
            score: 43,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 34,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Expertise: [
          {
            date: "Apr",
            sample: 29,
            score: 88,
            vsly: 0,
          },
          {
            date: "May",
            sample: 55,
            score: 61,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 26,
            score: 35,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 121,
            score: 46,
            vsly: 0,
          },
        ],
        Process: [
          {
            date: "Apr",
            sample: 31,
            score: 85,
            vsly: 0,
          },
          {
            date: "May",
            sample: 66,
            score: 77,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 23,
            score: 57,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Knowledge: [
          {
            date: "Apr",
            sample: 31,
            score: 74,
            vsly: 0,
          },
          {
            date: "May",
            sample: 100,
            score: 76,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 45,
            score: 33,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 110,
            score: 89,
            vsly: 0,
          },
        ],
      },
      series: [
        {
          name: "STOCK ABC",
          data: [
            [1, 75],
            [2, 71],
            [3, 61],
            [4, 0],
          ],
        },
      ],
      seriesTwo: [
        {
          name: "",
          data: [
            [1, 78],
            [2, 62],
            [3, 42],
            [4, 63],
          ],
        },
      ],
      seriesThree: [
        {
          name: "",
          data: [
            [1, 92],
            [2, 43],
            [3, 34],
            [4, 0],
          ],
        },
      ],
      seriesFour: [
        {
          name: "",
          data: [
            [1, 88],
            [2, 61],
            [3, 35],
            [4, 46],
          ],
        },
      ],
      seriesFive: [
        {
          name: "",
          data: [
            [1, 85],
            [2, 77],
            [3, 57],
            [4, 0],
          ],
        },
      ],
      seriesSix: [
        {
          name: "",
          data: [
            [1, 74],
            [2, 76],
            [3, 33],
            [4, 89],
          ],
        },
      ],

      chartOptions: {
        chart: {
          type: "area",
          height: 300,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          color: "green",
        },
        labels: {
          show: true,
        },
        xaxis: {
          type: "category",
          categories: ["Apr", "May", "Jun", "July"],
        },
        yaxis: {
          labels: {
            show: false,
          },
          opposite: false,
        },
        legend: {
          show: false,
        },
      },
    };
  },
  methods: {
    setGraph(selectedGraph) {
      this.currentGraph = selectedGraph;
    },
  },
};
</script>
