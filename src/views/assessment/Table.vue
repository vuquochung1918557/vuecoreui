<template>
  <CCard>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items="items"
        :header="false"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
      >
        <template #checked="{item}">
          <td>
             <CInputCheckbox :checked="item.checked" @click="onCheck(item.name)"></CInputCheckbox>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['checked','name']
      }
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    onCheck(item) {
      this.$emit('checking',item);
    },
    onUnChecking(name) {
      for (var i in this.items) {
        if (this.items[i].name == name) {
          if(this.items[i].checked) {
            this.items[i].checked = false
          } else {
            this.items[i].checked=true
          }
            break;
        }
      }
    }
  }
}
</script>
