<template>
  <div class="parent">
    {{state.name}}
    <child :parentProp="parentProp" @childEmit='handleChildEmit'></child>
    子传父:{{myData}}

    aaa:{{projectTitle}}
    route:{{route.path}}
    refprop:{{refprop}}
  </div>
</template>

<script>
import child from './testChild.vue'
import { reactive,ref,computed, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const refprop = ref("refprop")
    // let {getters} = useStore();
    const state = reactive({ name: "zzm" });
    const parentProp = reactive({ age: 18 });
    // let myData = ref("");
    let myData = reactive({testParam:"123"});
    const handleChildEmit = (params)=>{
      myData.testParam = params;
      // myData.value = params;
    };
    const projectTitle = computed(() => store.getters.projectTitle);
    onMounted(()=>{
      console.log("test onMounted!");
    })
    return {
      state,
      parentProp,
      handleChildEmit,
      myData,
      projectTitle,
      route,
      refprop
    }
  },
  components: {child}
};
</script>

<style lang="sass" scoped>
</style>