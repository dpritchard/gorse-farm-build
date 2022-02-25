<template>
  <div class="container mx-auto">
    <div class="flex space-between items-center p-2">
      <a @click="decrement" class="w-1/6 md:w-1/4 bg-blue-300 rounded-lg items-center p-1 md:p-2">&lt;</a>
      <div class="w-full">
        <p class="text-center">{{ currDate }}</p>
        <p class="text-center text-xs text-slate-400">{{ currComment }}</p>
      </div>
      <a @click="increment" class="w-1/6 md:w-1/4 bg-blue-300 rounded-lg items-center p-1 md:p-2 text-right">></a>
    </div>
    <div class="flex flex-wrap">
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s1"><img :src="s1path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s2"><img :src="s2path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s3"><img :src="s3path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s4"><img :src="s4path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s5"><img :src="s5path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s6"><img :src="s6path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s7"><img :src="s7path" class="rounded-lg"></a>
      </div>
      <div class="md:basis-1/2 lg:basis-1/4 p-2">
        <a href="#s8"><img :src="s8path" class="rounded-lg"></a>
      </div>
    </div>

    <modal name="s1" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s1path" />
    <modal name="s2" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s2path" />
    <modal name="s3" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s3path" />
    <modal name="s4" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s4path" />
    <modal name="s5" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s5path" />
    <modal name="s6" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s6path" />
    <modal name="s7" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s7path" />
    <modal name="s8" @decrement="decrement" @increment="increment" :currDate="currDate" :currComment="currComment" :src="s8path" />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 1,
      missingPath: '/assets/images/missing.jpg',
      info: [
        {date: '2022-02-11', comment: 'Site after house removal'},
        {date: '2022-02-14', comment: 'First day of site clearance'},
        {date: '2022-02-17', comment: 'Site clearance complete'},
        {date: '2022-02-20', comment: 'Initial survey'},
        {date: '2022-02-22', comment: 'Initial profiles and setout'},
        {date: '2022-02-25', comment: 'Additional site works and tī kōuka transplant'}
      ]
    }
  },
   mounted() {
    this.count = this.info.length-1
  },
  methods: {
    increment() {
      if(this.hasNext){
        this.count++
      }
    },
    decrement() {
      if(this.hasPrevious){
        this.count-- 
      }
    }
  },
  computed: {
    currDate() {
      return this.info[this.count].date
    },
    currComment() {
      return this.info[this.count].comment
    },
    currDateLabel() {
      let dd = new Date(this.currDate) // Ugh. 
      // Probbaly need to import the moment library...
    },
    hasPrevious() {
      return this.count > 0
    },
    hasNext() {
      return this.count < this.info.length-1
    },
    s1path() {
      return './assets/images/' + this.currDate + '/S1.jpg'
    },
    s2path() {
      return './assets/images/' + this.currDate + '/S2.jpg'
    },
    s3path() {
      return './assets/images/' + this.currDate + '/S3.jpg'
    },
    s4path() {
      return './assets/images/' + this.currDate + '/S4.jpg'
    },
    s5path() {
      return './assets/images/' + this.currDate + '/S5.jpg'
    },
    s6path() {
      return './assets/images/' + this.currDate + '/S6.jpg'
    },
    s7path() {
      return './assets/images/' + this.currDate + '/S7.jpg'
    },
    s8path() {
      return './assets/images/' + this.currDate + '/S8.jpg'
    },

  }
}
</script>