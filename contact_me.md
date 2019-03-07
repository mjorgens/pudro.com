---
layout: page
title: Contact Me
last_modified_at: 2019-03-07
---
## {{ site.author }} <br> Designer and Programmer
  
(p) {{ site.phone }}  
(e) [{{ site.email }}](mailto:{{ site.email }})

<form class="form-horizontal" action="https://formspree.io/{{ site.email }}" method="POST">
  <input type="text" name="name" placeholder="Your Name">
  <input type="email" name="_replyto" placeholder="Your Email">
  <textarea class="form-control" id="textarea" name="message">Your Message</textarea>
  <input type="submit" value="Send">
  <input type="text" name="_gotcha" style="display:none" />
  <input type="hidden" name="_subject" value="Contact Form Submission" />
</form>