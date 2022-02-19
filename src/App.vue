<template>
  <div class="container mx-auto">
    <div class="flex space-between items-center p-2">
      <a @click="decrement" class="w-1/4 bg-blue-300 rounded-lg items-center p-2">&lt;</a>
      <p class="w-1/2 text-center">{{ this.dates[this.count] }}</p>
      <a @click="increment" class="w-1/4 bg-blue-300 rounded-lg items-center p-2 text-right">></a>
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

    <modal name="s1" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s1path" />
    <modal name="s2" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s2path" />
    <modal name="s3" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s3path" />
    <modal name="s4" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s4path" />
    <modal name="s5" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s5path" />
    <modal name="s6" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s6path" />
    <modal name="s7" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s7path" />
    <modal name="s8" @decrement="decrement" @increment="increment" :date=this.dates[this.count] :src="s8path" />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      missingPath: '/assets/images/missing.jpg',
      dates: [
        '2022-02-11',
        '2022-02-14',
        '2022-02-17'
      ]
    }
  },
  methods: {
    increment() {
      if(this.count < this.dates.length-1){
        this.count++
      }
    },
    decrement() {
      if(this.count > 0){
        this.count-- 
      }
    }
  },
  computed: {
    s1path() {
      return '/assets/images/' + this.dates[this.count] + '/S1.jpg'
    },
    s2path() {
      return '/assets/images/' + this.dates[this.count] + '/S2.jpg'
    },
    s3path() {
      return '/assets/images/' + this.dates[this.count] + '/S3.jpg'
    },
    s4path() {
      return '/assets/images/' + this.dates[this.count] + '/S4.jpg'
    },
    s5path() {
      return '/assets/images/' + this.dates[this.count] + '/S5.jpg'
    },
    s6path() {
      return '/assets/images/' + this.dates[this.count] + '/S6.jpg'
    },
    s7path() {
      return '/assets/images/' + this.dates[this.count] + '/S7.jpg'
    },
    s8path() {
      return '/assets/images/' + this.dates[this.count] + '/S8.jpg'
    },

  }
}
</script>