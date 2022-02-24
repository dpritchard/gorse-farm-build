<template>
	<div :id="name" class="overlay text-left">
         <a href="#" class="cancel"></a>

         <div class="modal rounded p-2">
         	<div class="flex space-between items-center pb-2">
		      <a @click="$emit('decrement')" class="w-2/12 md:w-1/4 bg-blue-300 rounded-lg items-center pl-2 md:p-2 ml-auto mr-2 md:mr-6">&lt;</a>
		      <div class="w-full">
                <p class="text-center">{{ currDate }}</p>
                <p class="text-center text-xs text-slate-400">{{ currComment }}</p>
              </div>
		      <a @click="$emit('increment')" class="w-2/12 md:w-1/4 bg-blue-300 rounded-lg items-center pr-2 md:p-2 ml-2 md:ml-6 mr-auto text-right">></a>
              <a href="#" class="close px-2">&times;</a>
            </div>
            <div>
                <img :src="src">
            </div>
             
         </div>
     </div>
</template>

<script>
	export default {
		props: ['name', 'currDate', 'currComment', 'src']
	}
</script>

<style type="text/css">
	.overlay {
         visibility: hidden;
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         display: flex;
         align-items: center;
         justify-content: center;
         background: rgba(0, 0, 0, .4);
         transition: opacity .3s;
         opacity: 0;
     }

     .overlay:target {
         visibility: visible;
         opacity: 1;
     }

     .modal {
         position: relative;
         /*width: 500px;*/
         max-height: 95%;
         background: white;
         box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);
     }

     .modal .close {
         /*position: absolute;*/
         /*top: 15px;*/
         /*right: 15px;*/
         color: grey;
         text-decoration: none;
     }

     .overlay .cancel {
         position: absolute;
         width: 100%;
         height: 100%;
     }

     .modal>img {
        max-height: 550px;
     }
</style>