<template>
  <div class="w-fit h-fit">
    <b-icon
      v-if="type === 'bootstrap'"
      class="hrm-icon"
      :style="{
        color,
        ..._size,
      }"
      :icon="name.replace('bi-', '')"
      v-on="$listeners"
    />  
    <i
      v-esle-if="type === 'element'"
      class="hrm-icon"
      :style="{
        color,
        ..._size,
      }"
      :class="name"
    />
  </div>
</template>

<script>
import { ICON_TYPE } from "../constants";

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    size: {
      type: [String, Number],
      default: 16,
    },
    color: String,
  },

  computed: {
    _size() {
      if (!this.size) return {};

      switch (this.type) {
        case ICON_TYPE.BOOTSTRAP:
        case ICON_TYPE.IMAGE:
        case ICON_TYPE.SVG:
          return {
            width: this.parseSize(this.size),
            height: this.parseSize(this.size),
          };
        case ICON_TYPE.ELEMENT:
          return {
            fontSize: this.parseSize(this.size),
          };
        default:
          return {};
      }
    },

    type() {
      if (this.name.startsWith("bi")) {
        return ICON_TYPE.BOOTSTRAP;
      }

      if (this.name.startsWith("el-icon")) {
        return ICON_TYPE.ELEMENT;
      }

      if (this.name.startsWith("img")) {
        return ICON_TYPE.IMAGE;
      }

      return ICON_TYPE.SVG;
    },
  },

  mounted() {
    console.log(this.name);
  },

  methods: {
    parseSize(value) {
      if (/px$|rem$|em$/.test(value)) {
        return value;
      }
      return value + "px";
    },
  },
};
</script>
