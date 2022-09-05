<template>
  <div class="container mx-auto" @keydown.left="decrement" @keydown.right="increment">
    <div class="flex space-between items-center p-2">
      <a @click="decrement" class="w-1/6 md:w-1/4 bg-blue-300 rounded-lg items-center p-1 md:p-2">&lt;</a>
      <div class="w-full">
        <p class="text-center">{{ currDateLabel }}</p>
        <p class="text-center text-xs text-slate-400">{{ currComment }}</p>
      </div>
      <a @click="increment" class="w-1/6 md:w-1/4 bg-blue-300 rounded-lg items-center p-1 md:p-2 text-right">></a>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(dat, nme) in sites" class="md:basis-1/2 lg:basis-1/4 p-2">
        <a :href=dat.href><img :src=path(nme) class="rounded-lg"></a>
      </div>
    </div>

    <modal v-for="(dat, nme) in sites"
           :name=nme @decrement="decrement" @increment="increment" :currDateLabel="currDateLabel" 
           :currComment="currComment" :src=path(nme) />
</div>
</template>

<script>
import { DateTime } from "luxon"
export default {
  name: 'App',
  data() {
    return {
      count: 1,
      missingPath: '/assets/images/missing.jpg',
      info: [
        {date: '2022-02-11', comment: 'Site after house removal'},
        {date: '2022-02-14', comment: 'First day of site clearance', missing: ['s6']},
        {date: '2022-02-17', comment: 'Site clearance complete'},
        {date: '2022-02-20', comment: 'Initial survey'},
        {date: '2022-02-22', comment: 'Initial profiles and setout'},
        {date: '2022-02-25', comment: 'Additional site works and tī kōuka transplant'},
        {date: '2022-03-01', comment: 'More profiles and scaffolding!'},
        {date: '2022-03-03', comment: 'Battering the slope and marking floor levels'},
        {date: '2022-03-11', comment: 'Holes and footings'},
        {date: '2022-03-26', comment: 'Poles!'},
        {date: '2022-04-01', comment: 'Concrete! Officially out of the ground!'},
        {date: '2022-04-15', comment: 'Ready for bearers'},
        {date: '2022-04-23', comment: 'Bearers up!'},
        {date: '2022-04-30', comment: 'Joists!', missing: ['s8']},
        {date: '2022-05-08', comment: 'Thats a floor aye...'},
        {date: '2022-05-12', comment: 'Walls starting to take shape'},
        {date: '2022-05-26', comment: 'Wall frames up! Retaining almost ready for fill!'},
        {date: '2022-06-05', comment: 'Garage slab ready for concrete and a temporary deck!', missing: ['s5']},
        {date: '2022-06-17', comment: 'Slab poured, starting eco ply and first interior photos.'},
        {date: '2022-07-23', comment: 'Eco ply up and rafters installed!'},
        {date: '2022-08-06', comment: 'Window sills, taping and roof membrane intalled!'},
        {date: '2022-09-02', comment: 'Roof and internal insulation started.', missing: ['s1']}
      ],
      sites: {
        s1: {href: '#s1', from: '2022-02-11'},
        s2: {href: '#s2', from: '2022-02-11'},
        s3: {href: '#s3', from: '2022-02-11'},
        s4: {href: '#s4', from: '2022-02-11'},
        s5: {href: '#s5', from: '2022-02-11'},
        s6: {href: '#s6', from: '2022-02-11'},
        s7: {href: '#s7', from: '2022-02-11'},
        s8: {href: '#s8', from: '2022-02-11'},
        s9: {href: '#s9', from: '2022-06-17'},
        s10: {href: '#s10', from: '2022-06-17'},
        s11: {href: '#s11', from: '2022-07-23'},
      },
    }
  },
   mounted() {
    this.count = this.info.length-1
  },
  created() {
        let that = this;
        document.addEventListener('keyup', function (evt) {
            if (evt.keyCode === 37) {
                that.decrement();
            };
            if (evt.keyCode === 39) {
                that.increment();
            };
        });
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
    },
    path(nme) {
      if(!this.inSystem(nme)) {
        return './assets/images/not_yet.jpg'
      }
      if(this.currMissing.includes(nme)) {
        return './assets/images/missing.jpg'
      }
      return './assets/images/' + this.currDate + '/' + nme.toUpperCase() + '.jpg'
    },
    inSystem(nme){
      return DateTime.fromISO(this.sites[nme].from) <= DateTime.fromISO(this.currDate)
    },

  },
  computed: {
    currDate() {
      return this.info[this.count].date
    },
    currComment() {
      return this.info[this.count].comment
    },
    currMissing() {
      return this.info[this.count].missing || []
    },
    currDateLabel() {
      let dd = DateTime.fromISO(this.currDate)
      return dd.toLocaleString() + ' (' + dd.toRelative({ unit: ["weeks", "days"] }) + ')'
    },
    hasPrevious() {
      return this.count > 0
    },
    hasNext() {
      return this.count < this.info.length-1
    }
  }
}
</script>