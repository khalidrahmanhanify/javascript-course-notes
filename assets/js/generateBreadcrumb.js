function generateBreadCrumb() {
  const breadCrumbContainer = document.getElementById("breadcrumb");
  let pathArray = window.location.pathname.split("/").filter((p) => p);

  const repoName = "javascript-course-notes";
  const basePath = `/${repoName}`;

  // If last segment is index.html, drop it
  if (pathArray[pathArray.length - 1]?.toLowerCase() === "index.html") {
    pathArray.pop();
  }

  let breadcrumbHTML = `
    <a href="${basePath}/index.html">
      <img src="${basePath}/assets/Icons/monitor.png" style="width: 30px;"/>
    </a>
    <img src="${basePath}/assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>
  `;

  let fullPath = "";
  pathArray.forEach((segment, index) => {
    fullPath += `/${segment}`;
    const isLast = index === pathArray.length - 1;

    if (!isLast) {
      breadcrumbHTML += `<a href="${basePath}${fullPath}">${decodeURIComponent(
        segment
      )}</a>
        <img src="${basePath}/assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>`;
    } else {
      breadcrumbHTML += `<span>${decodeURIComponent(segment)}</span>`;
    }
  });

  breadCrumbContainer.innerHTML = breadcrumbHTML;
}

document.addEventListener("DOMContentLoaded", generateBreadCrumb);
