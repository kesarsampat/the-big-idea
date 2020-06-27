//Get the button:
var mybutton = document.getElementById("cals-scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function showCovidCalendar() {


  calendarCont.html(

        `<div class="blm-calendar" id="covid-cal">
      <h3>COVID-19</h3>
      <div class="calendar">
        <header>Sunday</header>
        <header>Monday</header>
        <header>Tuesday</header>
        <header>Wednesday</header>
        <header>Thursday</header>
        <header>Friday</header>
        <header>Saturday</header>
        <div>
          <p>Read</p>
          <a href="https://www.idsociety.org/globalassets/idsa/public-health/covid-19/covid-19-in-correctional-facilities.pdf" target="_blank">Strengthening the Response to COVID-19 in Correctional Facilities</a>
        </div>
        <div>
          <p>Listen<br /><br /></p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14923124/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Listening</p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14923124/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Listening</p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14923124/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Donate</p>
          <a href="https://www.cdcfoundation.org/give/ways-to-give" target="_blank">CDC Foundation</a>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/JGTtGCq9grE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe src="https://www.youtube.com/embed/JGTtGCq9grE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Read Updates</p>
          <a target="_blank" href="https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19#new">FDA Daily Roundups</a>
        </div>
        <div>
          <p>Continue Reading Updates</p>
          <a target="_blank" href="https://www.fda.gov/emergency-preparedness-and-response/counterterrorism-and-emerging-threats/coronavirus-disease-2019-covid-19#new">FDA Daily Roundups</a>
        </div>
        <div>
          <p>Listen<br /><br /></p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14892527/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Listening</p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14892527/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Donate</p>
          <a target="_blank" href="https://www.modestneeds.org/features/ledger/viewapp.asp?source=BrowseRequest&mode=upd&rp=l&id=489399">Modest Needs</a>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/F2hc2FLOdhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe src="https://www.youtube.com/embed/F2hc2FLOdhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Read</p>
          <a target="_blank" href="https://www.apaservices.org/practice/ce/self-care/health-providers-covid-19?_ga=2.81747984.622497654.1589910582-1472663472.1588073247">Self-Care for Healthcare Providers</a>
          <p>and</p>
          <a target="_blank" href="https://www.cstsonline.org/assets/media/documents/CSTS_FS_Supporting_Families_of_Healthcare_Workers_Exposed_COVID19.pdf">Supporting Families of Healthcare Workers</a>
        </div>
        <div>
          <p>Read</p>
          <a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/groups-at-higher-risk.html">Advice for Groups at High Risk</a>
          <p>and</p>
          <a target="_blank" href="https://www.idsociety.org/globalassets/idsa/public-health/covid-19/consumer-infographic-v5.pdf">Protecting Yourself From COVID-19</a>
        </div>
        <div>
          <p>Listen<br /><br /></p>
          <a target="_blank" href="https://open.spotify.com/episode/6tBqYnhMCzwpaLys0oVDYe">Coronavirus: Mental Health</a></div>
        <div>
          <p>Continue Listening</p>
          <a target="_blank" href="https://open.spotify.com/episode/6tBqYnhMCzwpaLys0oVDYe">Coronavirus: Mental Health</a>
        </div>
        <div>
          <p>Donate</p>
          <a target="_blank" href="http://www.nativepartnership.org/site/PageServer?pagename=pwna_home">Partnership With Native Americans</a>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/iCvmsMzlF7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe src="https://www.youtube.com/embed/iCvmsMzlF7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <p>Read</p>
          <a target="_blank" href="https://www1.nyc.gov/assets/doh/downloads/pdf/imm/covid-19-safe-protest.pdf">Safe Protesting</a>
          <p>and</p>
          <a target="_blank" href="https://huddle.uwmedicine.org/news/guidance-those-protesting-during-the-seattle-covid-19-pandemic">Protesting Advice</a>
        </div>
        <div>
          <p>Read Updates</p>
          <a target="_blank" href="https://sciencespeaksblog.org/?_ga=2.186922283.2079074285.1593052139-550460268.1593052139">Science Speaks</a>
        </div>
        <div>
          <p>Listen<br /><br /></p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14475257/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90"  scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Continue Listening</p>
          <iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/14475257/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/007bb8/" height="90" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
        <div>
          <p>Donate</p>
          <a target="_blank" href="https://www.directrelief.org/emergency/coronavirus-outbreak/">Direct Relief</a>
        </div>
        <div>
          <p>Watch</p>
          <a target="_blank" href="https://youtu.be/UG8YbNbdaco">How Pandemics Spread</a>
          <p>and</p>
          <a target="_blank" href="https://youtu.be/rb7TVW77ZCs">How Vaccines Work</a>
        </div>
        <div>
          <p>Watch</p>
          <a target="_blank" href="https://youtu.be/PSRJfaAYkW4">How Does Your Immune System Work?</a>
          <p>and</p>
          <a target="_blank" href="https://youtu.be/oqGuJhOeMek">Cell vs. Virus: A Battle for Health</a>
        </div>
      </div>`

  
  );

}

function showBlmCalendar() {
  calendarCont.html (
    `
          <div class="blm-calendar" id="blm-cal">
        <h3>Black Lives Matter</h3>
        <p class="credit">Originally created by Autumn Gupta and Bryanna Wallace.<p>

      <div class="calendar">
        <header>
          <p>Sunday</p>
        </header>
        <header>
          <p>Monday</p>
        </header>
        <header>
          <p>Tuesday</p>
        </header>
        <header>
          <p>Wednesday</p>
        </header>
        <header>
          <p>Thursday</p>
        </header>
        <header>
          <p>Friday</p>
        </header>
        <header>
          <p>Saturday</p>
        </header>
        
        <!-- check links-- some broken -->
        <div>
          <p>Read</p>
          <a href="//www.theatlantic.com/ideas/archive/2020/05/ahmaud-arbery/611539/%26amp;sa%3DD%26amp;ust%3D1593014435508000&sa=D&ust=1593014435735000&usg=AFQjCNGKxAmSCfwzFxDs9O_t8yv3fEdwWg" target="_blank">"Who Gets to Be Afraid in America?"</a>

       
        </div>
        <div>
          <p>Read</p>
          <a href="//www.theatlantic.com/ideas/archive/2020/05/americas-racial-contract-showing/611389/%26amp;sa%3DD%26amp;ust%3D1593014435509000&sa=D&ust=1593014435735000&usg=AFQjCNEnTq0spxjc3bXo17VwCTueqDlTEA" target="_blank">"America's Racial Contract is Killing Us"</a>
        </div>
        <div>
          <p> Continue Reading</p>
          <a href="//www.theatlantic.com/ideas/archive/2020/05/americas-racial-contract-showing/611389/%26amp;sa%3DD%26amp;ust%3D1593014435509000&sa=D&ust=1593014435735000&usg=AFQjCNEnTq0spxjc3bXo17VwCTueqDlTEA" target="_blank">"America's Racial Contract is Killing Us"</a>
        </div>
        <div>
          <p>Listen</p>
          <a href="//www.npr.org/sections/codeswitch/2019/12/31/761932806/your-body-being-used-where-prisoners-who-can-t-vote-fill-voting-districts%26amp;sa%3DD%26amp;ust%3D1593014435510000&sa=D&ust=1593014435735000&usg=AFQjCNHrSjKqCyhu9YMTJ39TtsPx2ghQMQ" target="_blank">"Your Body Being Used"</a>
        </div>
        <div>
          <p>Act by Email: </p>
          <a href="//defund12.org/" target="_blank">Reallocate city budgets by defunding the police</a>
        </div>
        <div class="zoom">
          <p>Watch<br /><br /></p>

          <iframe class="video" src="https://www.youtube.com/embed/e-BY9UEewHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.youtube.com/watch?v%253De-BY9UEewHw%2526feature%253Dyoutu.be%26amp;sa%3DD%26amp;ust%3D1593014435511000&sa=D&ust=1593014435735000&usg=AFQjCNHOcyR91xnhk4BsY9z8TwGyp5j5Tg">"How Studying Privilege Systems Can Strengthen Compassion" TEDTalk</a> -->
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe class="video" src="https://www.youtube.com/embed/e-BY9UEewHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.youtube.com/watch?v%253De-BY9UEewHw%2526feature%253Dyoutu.be%26amp;sa%3DD%26amp;ust%3D1593014435511000&sa=D&ust=1593014435735000&usg=AFQjCNHOcyR91xnhk4BsY9z8TwGyp5j5Tg" target="_blank">"How Studying Privilege Systems Can Strengthen Compassion" TEDTalk</a> -->
        </div>
        <div>
          <p>Read articles</p>
          <a href="https://nyti.ms/37JLWkZ" target="_blank">The 1619 Project</a>
        </div>
        <div>
          <p>Continue reading articles</p>
          <a href="https://nyti.ms/37JLWkZ" target="_blank">The 1619 Project</a>
        </div>
        <div>
          <p>Continue reading articles</p>
          <a href="https://nyti.ms/37JLWkZ" target="_blank">The 1619 Project</a>
        </div>
        <div>
          <p>Listen</p>
          <a href="//www.npr.org/sections/codeswitch/2019/03/14/700897826/when-civility-is-used-as-a-cudgel-against-people-of-color%26amp;sa%3DD%26amp;ust%3D1593014435513000&sa=D&ust=1593014435735000&usg=AFQjCNGd44YofWwC9qWOwFa0sdm_1CSFOQ" target="_blank">"When Civility is Used as a Cudgel Against People of Color"</a>
        </div>
        <div>
          <p>Act</p>
          <a href="https://www.vote.org/register-to-vote/" target="_blank">Register to Vote</a>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/-aCn72iXO9s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.youtube.com/watch?v%253D-aCn72iXO9s%26amp;sa%3DD%26amp;ust%3D1593014435514000&sa=D&ust=1593014435736000&usg=AFQjCNH-weJtmHqyVSBNDaNDz_Zz9dEDOg" target="_blank">"Let's Get to the Root of Racial Injustice" TEDTalk</a> -->
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe  src="https://www.youtube.com/embed/-aCn72iXO9s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.youtube.com/watch?v%253D-aCn72iXO9s%26amp;sa%3DD%26amp;ust%3D1593014435514000&sa=D&ust=1593014435736000&usg=AFQjCNH-weJtmHqyVSBNDaNDz_Zz9dEDOg" target="_blank">"Let's Get to the Root of Racial Injustice" TEDTalk</a> -->
        </div>
        <div>
          <p>Read</p>
          <a href="//www.vox.com/the-highlight/2019/5/20/18542843/intersectionality-conservatism-law-race-gender-discrimination%26amp;sa%3DD%26amp;ust%3D1593014435515000&sa=D&ust=1593014435736000&usg=AFQjCNGGtZx4HshkqF4QOifUKJDDjS29fw" target="_blank">"The Intersectionality Wars"</a>
        </div>
        <div>
          <p>Read<br /><br /></p>
          <a href="https://nationalseedproject.org/Key-SEED-Texts/white-privilege-unpacking-the-invisible-knapsack" target="_blank">"White Privilege: Unpacking the Invisible Knapsack"</a>
        </div>
        <div>
          <p>Continue Reading</p>
          <a href="https://nationalseedproject.org/Key-SEED-Texts/white-privilege-unpacking-the-invisible-knapsack" target="_blank">"White Privilege: Unpacking the Invisible Knapsack"</a>
          </div>
        <div>
          <p>Listen</p>
          <a href="//www.npr.org/sections/codeswitch/2019/02/20/691298594/the-power-of-martin-luther-king-jr-s-anger%26amp;sa%3DD%26amp;ust%3D1593014435516000&sa=D&ust=1593014435736000&usg=AFQjCNEupCP1uhk09hj6BOXbXttU2fYftA" target="_blank">"The Power of Martin Luther King Jr.'s Anger"</a>
        </div>
        <div>
          <p>Write or call local government representatives and police chiefs advocating for police de-escalation training.</p>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/uYyvbgINZkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.ted.com/talks/verna_myers_how_to_overcome_our_biases_walk_boldly_toward_them?referrer%253Dplaylist-talks_to_help_you_understand_r%26amp;sa%3DD%26amp;ust%3D1593014435517000&sa=D&ust=1593014435736000&usg=AFQjCNFNxwwozJaKhu9dUbf53afgF0kUzA" target="_blank">"How to Overcome Our Biases? Walk Boldly Towards Them" TEDTalk</a> -->
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe src="https://www.youtube.com/embed/uYyvbgINZkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.ted.com/talks/verna_myers_how_to_overcome_our_biases_walk_boldly_toward_them?referrer%253Dplaylist-talks_to_help_you_understand_r%26amp;sa%3DD%26amp;ust%3D1593014435517000&sa=D&ust=1593014435736000&usg=AFQjCNFNxwwozJaKhu9dUbf53afgF0kUzA" target="_blank">"How to Overcome Our Biases? Walk Boldly Towards Them" TEDTalk</a> -->
          </div>
        <div>
          <p>Read</p>
          <a href="//www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/%26amp;sa%3DD%26amp;ust%3D1593014435518000&sa=D&ust=1593014435736000&usg=AFQjCNFq3GcWuWyz9QLtVKeypfW1RaShog" target="_blank">"The Case for Reparations"</a>
        </div>
        <div>
          <p>Read<br /><br /></p>
          <a href="http://convention.myacpa.org/houston2018/wp-content/uploads/2017/11/Guidelines-for-Effective-White-Caucuses.pdf" target="_blank">"Tips for Creating Effective White Caucus Groups"</a>
        </div>
        <div>
          <p>Continue Reading</p>
          <a href="http://convention.myacpa.org/houston2018/wp-content/uploads/2017/11/Guidelines-for-Effective-White-Caucuses.pdf" target="_blank">"Tips for Creating Effective White Caucus Groups"</a>
        </div>
        <div>
          <p>Listen</p>
          <!-- <a href="//www.npr.org/sections/codeswitch/2018/05/23/589343378/my-father-stood-for-the-anthem-for-the-same-reason-that-colin-kaepernick-sits%26amp;sa%3DD%26amp;ust%3D1593014435519000&sa=D&ust=1593014435736000&usg=AFQjCNEOD5IwW3TX3mtjbF5CEMvejYAoGw">"Opinion: My Father Stood for the National Anthem for the Same Reason Colin Kaepernick Sits"</a>
          <p>and</p> -->
          <a href="//www.npr.org/sections/codeswitch/2018/07/14/628899391/when-calling-the-po-po-is-a-no-no%26amp;sa%3DD%26amp;ust%3D1593014435519000&sa=D&ust=1593014435737000&usg=AFQjCNGtDnzjQbR4KAUPF881YSNkZqQHXQ" target="_blank">"When calling the Po-Po is a No-No"</a>
        </div>
        <div>
          <p>Donate to anti-white supremacy work</p>
          <!-- <a href="//www.nationalcouncil.us/%26amp;sa%3DD%26amp;ust%3D1593014435547000&sa=D&ust=1593014435742000&usg=AFQjCNHGO5svy-xOeEttbUZBUj7MIQBD9w">National Council for Incarcerated and Formerly Incacerated Women and Girls</a> -->
          <p></p>
          <a href="https://www.naacp.org/" target="_blank">NAACP</a>
          <p></p>
          <a href="https://dreamdefenders.org/" target="_blank">Dream Defenders</a>
        </div>
        <div>
          <p>Watch<br /><br /></p>
          <iframe src="https://www.youtube.com/embed/-2Dj9M71JAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.ted.com/talks/alice_goffman_how_we_re_priming_some_kids_for_college_and_others_for_prison?referrer%253Dplaylist-talks_to_help_you_understand_r%26amp;sa%3DD%26amp;ust%3D1593014435520000&sa=D&ust=1593014435737000&usg=AFQjCNEsCSYpzl7b3zx-uMvT-Y-iXZAwVw" target="_blank">"How We're Priming Some Kids for College and others for prison"</a> -->
        </div>
        <div>
          <p>Continue Watching</p>
          <iframe src="https://www.youtube.com/embed/-2Dj9M71JAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <a href="//www.ted.com/talks/alice_goffman_how_we_re_priming_some_kids_for_college_and_others_for_prison?referrer%253Dplaylist-talks_to_help_you_understand_r%26amp;sa%3DD%26amp;ust%3D1593014435520000&sa=D&ust=1593014435737000&usg=AFQjCNEsCSYpzl7b3zx-uMvT-Y-iXZAwVw" target="_blank">"How We're Priming Some Kids for College and others for prison"</a> -->
        </div>
    
        </div>
      </div>
    `
  );
}

var calendarCont = $('.calendar-cont');

const blmDropOption = document.getElementById('blm-option');
const covidDropOption = document.getElementById('covid-option');

covidDropOption.addEventListener('click', showCovidCalendar);

blmDropOption.addEventListener('click', showBlmCalendar);




var pickDropBtn = $('.cal-dropbtn');
var pickDropdownContent = $('.cal-dropdown-content');

var arrowImg = document.getElementById('arrow-pic');


$(function() {
  pickDropBtn.hover(function() {
    arrowImg.setAttribute('src', '../assets/darkArrow.png');
  }, function() {
    arrowImg.setAttribute('src', '../assets/arrow.png');
  })
});

$(function() {
  pickDropdownContent.hover(function() {
    arrowImg.setAttribute('src', '../assets/darkArrow.png');
  }, function() {
    arrowImg.setAttribute('src', '../assets/arrow.png');
  })
});