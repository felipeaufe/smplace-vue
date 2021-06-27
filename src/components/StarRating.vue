<template>
  <div class="star-ratings" :rate="value"></div>
</template>

<script>
  export default {
    name: "StarRating",
    props: {
      rate: Number,
    },
    data () {
      return {
        value: 0,
      }
    },
    mounted() {
      [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5, 5]
      .every((item, index) => {
        if(this.rate <= item){
          this.value = index;
          return false;
        }
        return true;
      })
    },
  }
</script>

<style lang="scss">
  .star-ratings {
    unicode-bidi: bidi-override;
    color: #c5c5c5;
    font-size: 25px;
    height: 25px;
    width: 125px;
    position: relative;
    &::before { 
      content: '★★★★★';
      opacity: .3;
    }
  } 

  [rate="0"]::after {
    width: 0%;
  }
  [rate="1"]::after {
    width: 10%;
  }
  [rate="2"]::after {
    width: 20%;
  }
  [rate="3"]::after {
    width: 30%;
  }
  [rate="4"]::after {
    width: 40%;
  }
  [rate="5"]::after {
    width: 50%;
  }
  [rate="6"]::after {
    width: 60%;
  }
  [rate="7"]::after {
    width: 70%;
  }
  [rate="8"]::after {
    width: 80%;
  }
  [rate="9"]::after {
    width: 90%;
  }
  [rate="10"]::after {
    width: 100%;
  }

  .star-ratings::after {
    color: black;
    content: '★★★★★';
    position: absolute;
    z-index: 1;
    display: block;
    left: 0;
    top:0;
    width: attr(rating);
    overflow: hidden;
  }
</style>