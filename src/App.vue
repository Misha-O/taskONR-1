<template>
  <v-app>
    <PersistentNavbar />
    <v-row>
      <v-col cols="1">
        <v-navigation-drawer
          class="mt-10"
          mini-variant
          color="indigo darken-3"
          permanent
        >
          <v-list nav dense>
            <v-list-item>
              <v-list-item-icon style="cursor:pointer;">
                <v-icon dark>mdi-pin</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon style="cursor:pointer;">
                <v-icon dark>mdi-chart-bar</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon style="cursor:pointer;">
                <v-icon dark>mdi-email</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon style="cursor:pointer;">
                <v-icon dark>mdi-shape</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon style="cursor:pointer;">
                <v-icon dark>mdi-file-refresh-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="11">
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import PersistentNavbar from "@/components/PersistentNavbar";

export default {
  name: "App",

  components: {
    PersistentNavbar,
  },
};
</script>
