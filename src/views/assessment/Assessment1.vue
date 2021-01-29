<template>
  <div>
    <CCard>
          <CCardHeader>
            Banned
           <CListGroup :key="s" v-for="s in selected">
              <CListGroupItem tag="button" @click="onChecking(s)">{{ s }}</CListGroupItem>
            </CListGroup>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="ABC" active>
                <p>A</p>
               <CTableWrapper ref="child" @checking="onChecking"  :items="getByLetter('A')">
        </CTableWrapper>
                <p>B</p>
         <CTableWrapper ref="child2" @checking="onChecking"  :items="getByLetter('B')">
          
        </CTableWrapper>
                <p>C</p>
         <CTableWrapper ref="child3" @checking="onChecking"  :items="getByLetter('C')">
          
        </CTableWrapper>
              </CTab>
              <CTab title="DEF">
                <p>D</p>
               <CTableWrapper ref="child4"  @checking="onChecking"  :items="getByLetter('D')">
         
        </CTableWrapper>
                <p>E</p>
        <CTableWrapper ref="child5" @checking="onChecking"  :items="getByLetter('E')">
          
        </CTableWrapper>
                <p>F</p>
        <CTableWrapper ref="child6"  @checking="onChecking"  :items="getByLetter('F')">
         
        </CTableWrapper>
              </CTab>
              <CTab title="GHI">
                <p>G</p>
               <CTableWrapper ref="child7" @checking="onChecking"  :items="getByLetter('G')">
          
        </CTableWrapper>
                <p>H</p>
        <CTableWrapper ref="child8" @checking="onChecking"  :items="getByLetter('H')">
         
        </CTableWrapper>
                <p>I</p>
        <CTableWrapper ref="child9" @checking="onChecking"  :items="getByLetter('I')">
         
        </CTableWrapper>
              </CTab>
              <CTab title="JKL">
                <p>J</p>
               <CTableWrapper ref="child10" @checking="onChecking"  :items="getByLetter('J')">
         
        </CTableWrapper>
                <p>K</p>
        <CTableWrapper ref="child11" @checking="onChecking"  :items="getByLetter('K')">
         
        </CTableWrapper>
                <p>L</p>
        <CTableWrapper ref="child12" @checking="onChecking"  :items="getByLetter('L')">
          
        </CTableWrapper>
              </CTab>
              <CTab title="MN" >
                <p>M</p>
               <CTableWrapper ref="child13" @checking="onChecking"  :items="getByLetter('M')">
         
        </CTableWrapper>
                <p>N</p>
        <CTableWrapper ref="child14" @checking="onChecking"  :items="getByLetter('N')">
         
        </CTableWrapper>
              </CTab>
              <CTab title="OPQ" >
                <p>O</p>
               <CTableWrapper ref="child15" @checking="onChecking"  :items="getByLetter('O')">
         
        </CTableWrapper>
                <p>P</p>
        <CTableWrapper ref="child16" @checking="onChecking"  :items="getByLetter('P')">
         
        </CTableWrapper>
                <p>Q</p>
        <CTableWrapper ref="child17" @checking="onChecking"  :items="getByLetter('Q')">
         
        </CTableWrapper>
              </CTab>
              <CTab title="RST">
                <p>R</p>
               <CTableWrapper ref="child18" @checking="onChecking"  :items="getByLetter('R')">
          
        </CTableWrapper>
                <p>S</p>
        <CTableWrapper ref="child19" @checking="onChecking"  :items="getByLetter('S')">
          
        </CTableWrapper>
                <p>T</p>
        <CTableWrapper ref="child20" @checking="onChecking"  :items="getByLetter('T')">
         
        </CTableWrapper>
              </CTab>
              <CTab title="UVW" >
                <p>U</p>
               <CTableWrapper ref="child21" @checking="onChecking"  :items="getByLetter('U')">
         
        </CTableWrapper>
                <p>V</p>
        <CTableWrapper ref="child22" @checking="onChecking"  :items="getByLetter('V')">
         
        </CTableWrapper>
                <p>W</p>
        <CTableWrapper ref="child23" @checking="onChecking"  :items="getByLetter('W')">
          
        </CTableWrapper>
              </CTab>
              <CTab title="XYZ" >
                <p>X</p>
               <CTableWrapper ref="child24" @checking="onChecking"  :items="getByLetter('X')">
         
        </CTableWrapper>
                <p>Y</p>
        <CTableWrapper  ref="child25" @checking="onChecking"  :items="getByLetter('Y')">
         
        </CTableWrapper>
                <p>Z</p>
        <CTableWrapper ref="child26" @checking="onChecking"  :items="getByLetter('Z')">
          
        </CTableWrapper>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
        
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
import countriesData from './CountriesData'

export default {
  name: 'Assesment1',
  components: { CTableWrapper },
  data: () => ({
    master:[],
    selected:[]
  }),
  created () {
    this.getShuffledCountriesData()
  },
  methods: {
    filter(names, index, letter) {
    var filteredNames = names.filter(function(word) {
       return word.name.charAt(index) === letter;
    });
      return filteredNames;
    } ,
    getShuffledCountriesData () {
      this.master=  countriesData;
    },
    getByLetter(letter) {
      return this.filter(this.master, 0, letter);
    },
    onChecking(item) {
      if(this.selected.includes(item)) {
        var index = this.selected.indexOf(item);
        if (index > -1) {
            this.selected.splice(index, 1);
        }
      } else {
      this.selected.push(item)
      }
      this.$refs.child.onUnChecking(item);
      this.$refs.child2.onUnChecking(item);
      this.$refs.child3.onUnChecking(item);
      this.$refs.child4.onUnChecking(item);
      this.$refs.child5.onUnChecking(item);
      this.$refs.child6.onUnChecking(item);
      this.$refs.child7.onUnChecking(item);
      this.$refs.child8.onUnChecking(item);
      this.$refs.child9.onUnChecking(item);
      this.$refs.child10.onUnChecking(item);
      this.$refs.child11.onUnChecking(item);
      this.$refs.child12.onUnChecking(item);
      this.$refs.child13.onUnChecking(item);
      this.$refs.child14.onUnChecking(item);
      this.$refs.child15.onUnChecking(item);
      this.$refs.child16.onUnChecking(item);
      this.$refs.child17.onUnChecking(item);
      this.$refs.child18.onUnChecking(item);
      this.$refs.child19.onUnChecking(item);
      this.$refs.child20.onUnChecking(item);
      this.$refs.child21.onUnChecking(item);
      this.$refs.child22.onUnChecking(item);
      this.$refs.child24.onUnChecking(item);
      this.$refs.child25.onUnChecking(item);
      this.$refs.child26.onUnChecking(item);
    }
  }
}
</script>
