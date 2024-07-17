<template>
  <div class="page odd" id="contact">
    <h2 class="variative-font">Contact</h2>
    <div class="form-container">
      <form action="" method="">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="indonesia">Indonesia</option>
          <option value="asia">Asia</option>
          <option value="other">Others</option>
        </select>

        <label for="subject">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style="height: 200px"
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
@import "../assets/style.css";
</style>
