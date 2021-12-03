//fetch("nav.html")
// .then((respone) => respone.text())
// .then((html) => {
//  document.getElementById("menu").innerHTML = html;
// });

document.getElementById("menu").innerHTML = `
<ul>
    <li>
        <a title="About Us" href="subpages/aboutus.html">About Us</a>
        <ul>
            <li>
                <a title="Sub Link 1" href="#">Sub Link 1</a>
            </li>
            <li>
                <a title="Sub Link 2" href="#">Sub Link 2</a>
            </li>
        </ul>
    </li>
    <li>
        <a title="About the CEO" href="subpages/CEO.html">About the CEO</a>
        <ul>
            <li>
                <a title="Sub Link 3" href="#">Sub Link 3</a>
            </li>
            <li>
                <a title="Sub Link 4" href="#">Sub Link 4</a>
            </li>
        </ul>
    </li>
    <li>
        <a title="Service" href="subpages/service.html">Service</a>
        <ul>
            <li>
                <a title="Sub Link 5" href="#">Sub Link 5</a>
            </li>
            <li>
                <a title="Sub Link 6" href="#">Sub Link 6</a>
            </li>
        </ul>
    </li>
    <li>
        <a title="Contact Us" href="subpages/contact.html">Contact Us</a>
    </li>

</ul>
`;
document.getElementById("footer").innerHTML = `
&copy; TafeQLD
<div class="content">
  <a title="Privacy Policy" href="#">Privacy Policy</a>
</div>
<div class="content">
  <a title="Term of Service" href="#">Term of Service</a>
</div>
<div class="content">
  <a title="Contact Us" href="subpages/contact.html">Contact Us</a>
</div>S`;
