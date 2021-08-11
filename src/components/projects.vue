<template>
  <body>
    <div>
      <navbar></navbar>
      <div class="em"></div>
      <h1 class="hd">Personal Projects:</h1>
      <div class="set">
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/website.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>This Website</b></h5>
            <p class="cart-text p1">Vue.js, Bootstrap</p>
            <div>
              <b-button v-b-modal.websitemodal pill variant="primary" dark>View More</b-button>
              <b-modal id="websitemodal" ok-only centered title="This Website">
                <p class="my-4">This website was built using Vue-2, HTML, CSS and Bootstrap!
                  <br>Click the GitHub logo below to see the code for it!<br><br>
                  <a href="https://github.com/daltknap/daltknap.github.io"><img src="../assets/githubblack.png" alt="Link to Github"></a>
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/snowball.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Snowball Fight</b></h5>
            <p class="cart-text p1">HTML, CSS, JavaScript, jQuery</p>
            <div>
              <b-button v-b-modal.snowmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="snowmodal" ok-only centered title="Snowball Fight">
                <video width="90%" controls>
                  <source src="../assets/snowballvid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">This is a web app that simulates a snowball fight!<br>
                  It was built using HTML, CSS, JavaScript and jQuery.
                  <br>Click the GitHub logo below to see the code for it!<br><br>
                  <a href="https://github.com/daltknap/snowballFight"><img src="../assets/githubblack.png" alt="Link to Github"></a>
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 388: Introduction to Computer Security</h1>
      <div class="set">
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/crypto.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Cryptography</b></h5>
            <p class="cart-text p1">Python</p>
            <div>
              <b-button v-b-modal.cryptomodal pill variant="primary" dark>View More</b-button>
              <b-modal id="cryptomodal" ok-only centered title="Cryptography">
                <p class="my-4">This project focused on investigating vulnerable applications of 
                  cryptography. In part one, the authentication capability of an imaginary server 
                  API was attacked by exploiting the length-extension vulnerability of hash 
                  functions in the MD5 and SHA families. Part two of the project consisted of 
                  using the fastcoll tool made by Marc Stevens to generate MD5 hash collisions, 
                  and then exploited them to conceal malicious behavior in software. In part three 
                  of the project, frequency analysis was used to break a Vigenère Cipher. In the 
                  next part, vulnerable RSA padding was exploited to forge a digital signature 
                  through Bleichenbacher’s Attack. The final part of the project consisted of 
                  exploiting a cipher block chaining padding oracle with a chosen cipher text attack, 
                  which decrypted a message without knowing the key.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/web.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Web Security</b></h5>
            <p class="cart-text p1">HTML, JavaScript, SQL</p>
            <div>
              <b-button v-b-modal.webmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="webmodal" ok-only centered title="Web Security">
                <p class="my-4">This project focused on gaining the ability to spot common 
                  vulnerabilities in websites, and how to exploit various flawed defenses for the 
                  vulnerabilities. First, we were able to log in as an arbitrary user using SQL 
                  injection attacks. In part two, cross-site scripting (XSS) attacks were used to 
                  exploit the search bar which did not properly filter search terms before echoing 
                  them into the results page. In the final part, cross-site request forgery (CSRF) 
                  attacks were used to exploit vulnerabilities in the login form, which caused 
                  clients to login to an account we controlled.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/networking.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Networking</b></h5>
            <p class="cart-text p1">Go</p>
            <div>
              <b-button v-b-modal.networkingmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="networkingmodal" ok-only centered title="Networking">
                <p class="my-4">This project focused on network protocols, network packet trace 
                  analysis, and common network attacks. Offensive techniques were used to intercept 
                  and manipulate network traffic, through the use of man-in-the-middle attacks. 
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/application.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Application Security</b></h5>
            <p class="cart-text p1">Python</p>
            <div>
              <b-button v-b-modal.applicationmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="applicationmodal" ok-only centered title="Application Security">
                <p class="my-4">This project focused on exploiting control-flow hijacking 
                  vulnerabilities like buffer overflows in application software. Gained the 
                  ability to identify and avoid buffer overflow vulnerabilities in native 
                  code, and understand the severity of buffer overflows. 
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/forensics.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Forensics</b></h5>
            <p class="cart-text p1">Hard Drive Investigation</p>
            <div>
              <b-button v-b-modal.forensicsmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="forensicsmodal" ok-only centered title="Forensics">
                <p class="my-4">In this project, I played the role of a forensic analyst and 
                  investigated the theft of company secrets. The hard disk was decrypted, and 
                  forensic examination of the disk image was performed. Learned how computer 
                  use can leave persistent traces and why such evidence is often difficult to 
                  remove or conceal, while gaining experience in forensic techniques to 
                  investigate computer misuse and intrusion. Project also highlighted how to 
                  retrieve information from a disk image without booting the operating system, 
                  and understanding why this is necessary to preserve forensic integrity.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 493: User Interface Development</h1>
      <div class="set">
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/study.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Study Buddy</b></h5>
            <p class="cart-text p1">Vue.js, Bootstrap</p>
            <div>
              <b-button v-b-modal.studymodal pill variant="primary" dark>View More</b-button>
              <b-modal id="studymodal" ok-only centered title="Study Buddy">
                <video width="90%" controls>
                  <source src="../assets/studyBuddy.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">In a team of four people, we created a web-based application
                  that is intended to help students study. It was implemented using HTML,
                  CSS, Bootstrap, Vue-2, and the Firebase database.
                  <br><br>Click the GitHub logo below to see the code for it!<br><br>
                  <a href="https://github.com/daltknap/study-buddy"><img src="../assets/githubblack.png" alt="Link to Github"></a>
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/MardiGras.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Mardi Gras Parade</b></h5>
            <p class="cart-text p1 para2">HTML, CSS, JavaScript, jQuery</p>
            <div>
              <b-button v-b-modal.mardimodal pill variant="primary" dark>View More</b-button>
              <b-modal id="mardimodal" ok-only centered title="Mardi Gras Parade">
                <video width="90%" controls>
                  <source src="../assets/mardigrasvid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">Built using HTML, CSS, JavaScript and jQuery, this game features 
                  a parade float throwing items and allows the user to collect the items and 
                  get points.<br><br>Click the github logo below to view the README doc for the project!<br><br>
                  <a href="https://github.com/daltknap/mardigras"><img src="../assets/githubblack.png" alt="Link to Github"></a>
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 285: Practical Programming in Java</h1>
      <div class="set">
        <div class="card indiv">
          <div class="box">
            <pre class="tweet">Tweet file: obama.txt<br>Location boundary: [37.0, -104.05] to [49.0, -80.517]<br>Sentiment within boundary:<br>    Average sentiment over 129 tweets: 0.0391<br>Sentiment outside boundary:<br>    Average sentiment over 627 tweets: 0.0088
            </pre>
          </div>
          <div class="card-body col">
            <h5 class="card-title"><b>Tweet Sentiments</b></h5>
            <p class="cart-text p1">Java</p>
            <div>
              <b-button v-b-modal.tweetmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="tweetmodal" ok-only centered title="Tweet Sentiments">
                <p class="my-4">Wrote a program to analyze Twitter data to determine how people 
                  within a geographical region feel about a topic compared to people outside of 
                  that region.<br><br>This project consisted of defining the basic data structures 
                  and aggregating tweets according to location and gain the basic literacy of Java 
                  through reading and writing Java code.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv mor">
          <img class="card-img-top bod" src="../assets/tefball.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>TefBall</b></h5>
            <p class="cart-text p1">Java</p>
            <div>
              <b-button v-b-modal.tefballmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="tefballmodal" ok-only centered title="TefBall">
                <video width="90%" controls>
                  <source src="../assets/tefballvid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">Implemented a game called TefBall, which consists of players on a 
                  field and a ball and strongly resembles American Football.<br><br>This project 
                  focused on polymorphism and inheritance between Java classes.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/wheel.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Wheel of Fortune</b></h5>
            <p class="cart-text p1">Java</p>
            <div>
              <b-button v-b-modal.wheelmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="wheelmodal" ok-only centered title="Wheel of Fortune">
                <video width="90%" controls>
                  <source src="../assets/wheelvid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">Implemented the Wheel of Fortune game, allowing the user to
                  select the word, create the players, and then play the game.<br><br>
                  This project focused on including a graphical user interface and using
                  the Swing toolkit.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv mor">
          <img class="card-img-top bod" src="../assets/budget.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Budget Tracker App</b></h5>
            <p class="cart-text p1">Java, Android Studios</p>
            <div>
              <b-button v-b-modal.budgetmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="budgetmodal" ok-only centered title="Budget Tracker App">
                <video width="90%" controls>
                  <source src="../assets/budgetvid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">This app was implemented to allow the user to keep track of
                  a budget by entering transactions with a specified category and purchase amount.
                  The app displayed the total cost spent, total spent by category, along with options
                  to view the individual transactions, clear all data, and add a new transaction.
                  The app also kept transaction data persistent, so all data will still be present 
                  after closing/restarting the app.<br><br>This project provided experience in Android
                  and app development.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 485: Web Systems</h1>
      <div class="set">
        <div class="card indiv mor">
          <img class="card-img-top bod" src="../assets/insta.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Instagram Clone</b></h5>
            <p class="cart-text p1">HTML, Python, React.js</p>
            <div>
              <b-button v-b-modal.instamodal pill variant="primary" dark>View More</b-button>
              <b-modal id="instamodal" ok-only centered title="Instagram Clone">
                <video width="90%" controls>
                  <source src="../assets/instavid.mp4" type="video/mp4">
                  <source src="movie.ogg" type="video/ogg">
                  Your browser does not support the video tag.
                </video>
                <p class="my-4">
                  Implemented an Instagram Clone using three different methods creating client-side 
                  dynamic pages and a REST API, server-side dynamic pages, and a static site generator through 
                  templates.<br><br>This project was completed using Python and Flask, Jinja2, React, JSON, 
                  SQLite, HTML and CSS.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/mapreduce.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Map Reduce</b></h5>
            <p class="cart-text p1">Python</p>
            <div>
              <b-button v-b-modal.mapmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="mapmodal" ok-only centered title="Map Reduce">
                <p class="my-4">On a team of three people, we implemented a multi-process, multi-threaded, 
                  Map Reduce server in Python that executes user-submitted MapReduce jobs on a single machine.
                  The MapReduce server runs each job to completion, handled failures along the way, and writes
                  the output to a given directory for each job.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/wiki.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Wikipedia Search Engine</b></h5>
            <p class="cart-text p1">Python, Hadoop</p>
            <div>
              <b-button v-b-modal.wikimodal pill variant="primary" dark>View More</b-button>
              <b-modal id="wikimodal" ok-only centered title="Wikipedia Search Engine">
                <img class="modalpic" src="../assets/wikibig.png" alt="Wikipedia Search Pic" />
                <p class="my-4">On a team of three people, we built a scalable search engine that is similar to
                  a commercial search engine. Our search engine indexing was implemented with MapReduce so it is 
                  able to be scaled to very large corpus sizes, information retrival is based on both tf-idf and
                  PageRank scores, and had a new user interface that allows user-driven scoring and summarization.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 281: Data Structures and Algorithms</h1>
      <div class="set">
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/treasure.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Treasure Hunt</b></h5>
            <p class="cart-text p1">C++</p>
            <div>
              <b-button v-b-modal.huntmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="huntmodal" ok-only centered title="Treasure Hunt">
                <img class="modalpic" src="../assets/treasure.png" alt="Card image cap"/>
                <p class="my-4">Implemented a program that uses both a DFS algoritm and a BFS algorithm 
                  to search land and water locations for a burried treasure in a 2D grid. The program allowed
                  specification of a stack or queue for the two search parties, controlling if that
                  part of the program would be BFS or DFS.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/zombie.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Priority Queues</b></h5>
            <p class="cart-text p1">C++</p>
            <div>
              <b-button v-b-modal.zombiemodal pill variant="primary" dark>View More</b-button>
              <b-modal id="zombiemodal" ok-only centered title="Priority Queues">
                <img class="modalpic" src="../assets/zombie.png" alt="Card image cap"/>
                <p class="my-4">This project consisted of implementing several different types
                  of priority queues. Part A used the standard libary priority queue to fight
                  off a zombie attack, where as part B consisted of implementing a sorted array
                  priority queue, a binary heap priority queue, and a pairing heap priority queue.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/log.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Log Manager</b></h5>
            <p class="cart-text p1">C++</p>
            <div>
              <b-button v-b-modal.logmodal pill variant="primary" dark>View More</b-button>
              <b-modal id="logmodal" ok-only centered title="Log Manager">
                <img class="modalpic" src="../assets/log.png" alt="Card image cap"/>
                <p class="my-4">Implemented a program that utilized hash tables and binary
                  search trees to create, add, delete, and store information.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv">
          <img class="card-img-top bod" src="../assets/poke.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Pokemon Trainer</b></h5>
            <p class="cart-text p1">C++</p>
            <div>
              <b-button v-b-modal.pokemodal pill variant="primary" dark>View More</b-button>
              <b-modal id="pokemodal" ok-only centered title="Pokemon Trainer">
                <img class="modalpic" src="../assets/poke.png" alt="Card image cap"/>
                <p class="my-4">This project implemented Prim's and Kruskal's MST algorithms that
                  searched for the best path to take during different scenarios. It also implemented
                  and utalized a Branch and Bound algorithm, and TSP heuristics to achieve a 
                  nearly-optimal solution as fast as possible.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr1">
      <h1 class="hd">EECS 370: Computer Organization</h1>
      <div class="set">
        <div class="card indiv othertall">
          <img class="card-img-top bod" src="../assets/p1.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>LC-2K Assembly</b></h5>
            <p class="cart-text p1">C</p>
            <div>
              <b-button v-b-modal.p1modal pill variant="primary" dark>View More</b-button>
              <b-modal id="p1modal" ok-only centered title="LC-2K Assembly">
                <img class="modalpic" src="../assets/p1.png" alt="Card image cap"/>
                <p class="my-4">
                  This project consisted of three parts, the first of which was writing a program
                  that takes in an assembly-language program and produces the corresponding machine
                  language. In the second part, I implemented a behavioral simulator for the resulting
                  machine code. In the final part, a short assembly-language program was created to
                  multiply two numbers.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv othertall">
          <img class="card-img-top bod" src="../assets/p2.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>LC-2K Linker</b></h5>
            <p class="cart-text p1">C</p>
            <div>
              <b-button v-b-modal.p2modal pill variant="primary" dark>View More</b-button>
              <b-modal id="p2modal" ok-only centered title="LC-2K Linker">
                <img class="modalpic" src="../assets/p2.png" alt="Card image cap"/>
                <p class="my-4">Implemented a program to take multiple assembly failures
                  and link them together, creating multi-file LC-2K projects.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv mor">
          <img class="card-img-top bod" src="../assets/p3.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>LC-2K Pipeline</b></h5>
            <p class="cart-text p1">C</p>
            <div>
              <b-button v-b-modal.p3modal pill variant="primary" dark>View More</b-button>
              <b-modal id="p3modal" ok-only centered title="LC-2K Pipeline">
                <img class="modaltall" src="../assets/p3.png" alt="Card image cap"/>
                <p class="my-4">
                  Created a cycle-accurate behavioral simulator for a pipelined implementation 
                  of the LC-2K, complete with data forwarding and simple branch prediction.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="card indiv othertall">
          <img class="card-img-top bod" src="../assets/p4.png" alt="Card image cap"/>
          <div class="card-body col">
            <h5 class="card-title"><b>Cache Simulator</b></h5>
            <p class="cart-text p1">C</p>
            <div>
              <b-button v-b-modal.p4modal pill variant="primary" dark>View More</b-button>
              <b-modal id="p4modal" ok-only centered title="Cache Simulator">
                <img class="modalpic" src="../assets/p4.png" alt="Card image cap"/>
                <p class="my-4">
                  Implemented a program that simulated a CPU cache (unified instruction/data), and 
                  integrated the cache into a behavioral simulator. As the processor simulator executes
                  an assembly-language program, it accesses instructions and data and these accesses are 
                  serviced by the cache, which transfers data to/from memory as needed.
                </p>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
      <foot></foot>
    </div>
  </body>
</template>

<script>
import navbar from './navbar.vue'
import foot from './foot.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'projects',
  components: {
      navbar,
      foot,
  },
}
</script>


<style scoped>

.set {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.indiv {
  padding: 10px;
  margin: 7px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  font-family: 'Oswald', serif;
  text-align: center;
  display: inline-block;
  background-color: #19181A;
  border-color: #479761;
  border-width: 5px;
}
.hd {
  color: #A16E83;
  font-weight: bold;
}

.hr1{
  border-bottom: 5px solid #19181A;
  border-radius: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.p1{
  text-align: center;
}

.col {
  color: #B19F9E;
}

.em {
  padding-top: 100px;
}

.para2 {
  padding-left: 2.5%;
}

.tweet {
  text-align: left;
  color: white;
  font-size: 80%;
  tab-size: 4;
}

.box {
  padding-top: 17%;
  padding-bottom: 8%;
}

.mor {
  padding-left: 5%;
  padding-right: 5%;
}

.modalpic {
  width: 100%;
}

.modaltall {
  height: 40%;
}

.othertall {
  padding-top: 4%;
}

</style>