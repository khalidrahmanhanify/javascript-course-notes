function generateBreadCrumb() {
  const breadCrumbContainer = document.getElementById("breadcrumb");
  let pathArray = window.location.pathname.split("/").filter((p) => p);
  const repoName = "javascript-course-notes";

  // If last segment is index.html, drop it
  if (pathArray[pathArray.length - 1]?.toLowerCase() === "index.html") {
    pathArray.pop();
  }

  let breadcrumbHTML = `
    <a href="/index.html">
      <img src="${repoName}/assets/Icons/monitor.png" style="width: 30px;"/>
    </a>
     <img src="${repoName}/assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>
  `;

  let fullPath = "";
  pathArray.forEach((segment, index) => {
    if (segment === repoName) return;
    fullPath += `/${segment}`;

    breadcrumbHTML += `
     
    `;
    breadcrumbHTML += `<a href="${fullPath}">${decodeURIComponent(segment)}</a>
       <img src="${repoName}/assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>`;
  });
  console.log(fullPath);

  breadCrumbContainer.innerHTML = breadcrumbHTML;
}

document.addEventListener("DOMContentLoaded", generateBreadCrumb);
