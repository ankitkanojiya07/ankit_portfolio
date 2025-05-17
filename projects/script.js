// $(document).ready(function () {
//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');
//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }
//     });
// });

// document.addEventListener('visibilitychange', function () {
//     if (document.visibilityState === "visible") {
//         document.title = "Projects | Portfolio Ankit Kanojiya";
//         $("#favicon").attr("href", "/assets/images/favicon.png");
//     } else {
//         document.title = "Come Back To Portfolio";
//         $("#favicon").attr("href", "/assets/images/favhand.png");
//     }
// });

// // Fetch and display projects
// function getProjects() {
//     return fetch("projects.json")
//         .then(response => response.json())
//         .then(data => data);
// }

// function showProjects(projects) {
//     let projectsContainer = document.querySelector(".work .box-container");
//     let projectsHTML = "";
//     projects.forEach(project => {
//         projectsHTML += `
//         <div class="grid-item ${project.category}">
//             <div class="box tilt" style="width: 380px; margin: 1rem">
//                 <img draggable="false" src="Ankit Portfolio/assets/images/projects/${project.image}.png" alt="${project.name}" />
//                 <div class="content">
//                     <div class="tag">
//                         <h3>${project.name}</h3>
//                     </div>
//                     <div class="desc">
//                         <p>${project.desc}</p>
//                         <div class="btns">
//                             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//                             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     });
//     projectsContainer.innerHTML = projectsHTML;
//     VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 20 });
// }

// getProjects().then(data => showProjects(data));
