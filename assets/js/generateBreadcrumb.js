function generateBreadCrumb() {
  const breadCrumbContainer = document.getElementById("breadcrumb");

  // Get path parts
  let pathArray = window.location.pathname.split("/").filter((p) => p);

  const repoName = pathArray.length > 0 ? pathArray[0] : "";
  const basePath = `/${repoName}`;

  // Drop the repo name so breadcrumb starts clean
  if (repoName) {
    pathArray.shift();
  }

  // If last segment is index.html, drop it
  if (pathArray[pathArray.length - 1]?.toLowerCase() === "index.html") {
    pathArray.pop();
  }

  // Start breadcrumb with home icon
  let breadcrumbHTML = `
    <a href="${basePath}/index.html">
      <img src="${basePath}/assets/Icons/monitor.png" style="width: 30px;"/>
    </a>
  `;

  let fullPath = "";
  pathArray.forEach((segment, index) => {
    fullPath += `/${segment}`;
    const isLast = index === pathArray.length - 1;

    breadcrumbHTML += `
      <img src="${basePath}/assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>
    `;

    if (!isLast) {
      breadcrumbHTML += `<a href="${basePath}${fullPath}">${decodeURIComponent(
        segment
      )}</a>`;
    } else {
      breadcrumbHTML += `<span>${decodeURIComponent(segment)}</span>`;
    }
  });

  breadCrumbContainer.innerHTML = breadcrumbHTML;
}

document.addEventListener("DOMContentLoaded", generateBreadCrumb);
