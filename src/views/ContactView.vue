<template>
   <section id="contact">
        <div class="container shadow p-3 mb-5 bg-body rounded">
            <h1>Contact me</h1>
              <div>
                <form action="https://formspree.io/f/meqnvgjj"
                method="POST">
                  <div class="row">
                    <div class="col-md-6 mt-3">
                    <input type="name" class="form-control shadow-sm p-3 mb-5 bg-body rounded" id="name" placeholder="Name" name="name"></div>
                    <div class="col-md-6 mt-3">
                    <input type="email" class="form-control shadow-sm p-3 mb-5 bg-body rounded" id="email" placeholder="Email" name="email"></div>
                    <div class="mt-3 ">
                    <input type="phone" class="form-control shadow-sm p-3 mb-5 bg-body rounded" id="phone" placeholder="Phone number" name="phone"></div>
                </div>
                <div class="row">
                    <div class=" mt-3 ">
                    <textarea type="text" class="form-control textarea shadow-sm p-3 mb-5 bg-body rounded" id="text" placeholder="Message" name="message"></textarea></div>
                <div class="row display-flex justify-content-evenly">
                    <div class="col-auto mt-3 mb-3">
                        <button type="submit" class="btn" id="submit">Send Message</button>
                      </div>
                </div>
                </div>
                </form>
            </div>
        </div>
    </section>  
</template>