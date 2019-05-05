<template>
  <div class="todo-container mb-1">
    <!-- <img class="check" v-if="done" v-on:click="toggle" src="../assets/done.png" alt="test">
    <img  class="check" v-if="!done" v-on:click="toggle" src="../assets/not-done.png" alt="test"> -->
    
    <div class="task-row row my-2">
      <div class="checked col-1" v-if="done" v-on:click="toggle">
        <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs>
              <rect id="path-1" x="0" y="1" width="16" height="16" rx="2"></rect>
              <filter x="-12.5%" y="-12.5%" width="125.0%" height="125.0%" filterUnits="objectBoundingBox" id="filter-2">
                  <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                  <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                  <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
              </filter>
          </defs>
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Checkbox-/-Checked" transform="translate(0.000000, -1.000000)">
                  <g id="Check-Background">
                      <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                      <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                      <rect stroke="#979797" stroke-width="1" x="0.5" y="1.5" width="15" height="15" rx="2"></rect>
                  </g>
                  <polygon id="Rectangle-34" fill="#4A90E2" points="8 13 3 8 5 6 8 9 16 1 18 3"></polygon>
              </g>
          </g>
        </svg>
      </div>
      <div class="unchecked col-1" v-if="!done" v-on:click="toggle">
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs>
                <rect id="path-1" x="0" y="2" width="16" height="16" rx="2"></rect>
                <filter x="-12.5%" y="-12.5%" width="125.0%" height="125.0%" filterUnits="objectBoundingBox" id="filter-2">
                    <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Checkbox-/-Unchecked" transform="translate(0.000000, -2.000000)">
                    <g id="Check-Background">
                        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        <rect stroke="#979797" stroke-width="1" x="0.5" y="2.5" width="15" height="15" rx="2"></rect>
                    </g>
                </g>
            </g>
        </svg>        
      </div>
      <div class="msg col-10 px-0">
        <span class="task-content" v-bind:class="{ taskDone: done }">{{ task.text }} </span>
      </div>
      <div class="delete col-1 my-0 py-0" v-on:click="$emit('deleteTask',task.id)">
        <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Material-Design-Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Material/Icons-black/close" transform="translate(-5.000000, -5.000000)" fill="#E9939D">
                    <polygon id="Shape" points="19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12"></polygon>
                </g>
            </g>
        </svg>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    task: Object
  },
  data: function(){
    return {
      done: false,
    }
  },
  methods: {
    toggle: function(){
      this.done = !this.done
    }
  },
}
</script>

<style>
.todo-container{
  background-color: #F7F7F9;
  text-align: left;
  border-radius: 2px;
}

img.check{
  height: 40px;
  width: 40px;
}
.task-content{
  font-weight: 700;
  font-size: 28;
}

svg {
  position: absolute;
}

.task-row{
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}

.taskDone {
  text-decoration: line-through;
  color: darkgray;
}

</style>
