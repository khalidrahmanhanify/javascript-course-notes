function generateBreadCrumb() {
  const breadCrumbContainer = document.getElementById("breadcrumb");
  let pathArray = window.location.pathname.split("/").filter((p) => p);

  // If last segment is index.html, drop it
  if (pathArray[pathArray.length - 1]?.toLowerCase() === "index.html") {
    pathArray.pop();
  }

  let breadcrumbHTML = `
    <a href="/index.html">
      <img src="../../../assets/Icons/monitor.png" style="width: 30px;"/>
    </a>
     <img src="../../../assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>
  `;

  let fullPath = "";
  pathArray.forEach((segment, index) => {
    fullPath += `/${segment}`;
    const isLast = index === pathArray.length - 1;

    breadcrumbHTML += `
     
    `;

    if (!isLast) {
      breadcrumbHTML += `<a href="${fullPath}">${decodeURIComponent(
        segment
      )}</a>
       <img src="../../../assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>`;
    } else {
      breadcrumbHTML += `<span>${decodeURIComponent(segment)}</span>
       <img src="../../../assets/Icons/arrow_right.png" style="width: 20px; height: 20px;"/>`;
    }
  });

  breadCrumbContainer.innerHTML = breadcrumbHTML;
}

document.addEventListener("DOMContentLoaded", generateBreadCrumb);
