<template>
  <base-card title="uncho" id="presentation"></base-card>
</template>

<script>
export default {
  name: "Uncho"
};
</script>
<style lang="less" scoped>
#presentation {
  background-image: url("/assets/wojexe.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  /deep/ h1 {
    font-size: 4rem;
    padding: 2rem 3rem;
    border-radius: 85px;
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.3);
    // SHADOW DISABLED FOR WEBKIT COMPATIBILITY
    //box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;

    font-style: normal;
    margin-bottom: 0;
  }
}
@media (max-width: 420px) {
  #presentation {
    /deep/ h1 {
      font-size: 3rem;
      padding: 1.5rem 2.5rem;
    }
  }
}
</style>
