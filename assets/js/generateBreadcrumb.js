function generateBreadCrumb() {
  const breadCrumbContainer = document.getElementById("breadcrumb");

  // Get current path or use simulated path
  let currentPath = window.simulatedPath || window.location.pathname;

  // Split the pathname into parts
  let pathArray = currentPath
    .split("/")
    .filter((p) => p && p.toLowerCase() !== "index.html");

  // Detect repo name (first segment)
  const repoName = pathArray.length > 0 ? pathArray[0] : "";
  const basePath = repoName ? `/${repoName}` : "";

  // Remove repo name from breadcrumb segments
  if (repoName) {
    pathArray.shift();
  }

  // Start breadcrumb with home icon (always links to repo root index.html)
  let breadcrumbHTML = `
                <a href="${basePath}/index.html" title="Home">
                    <img src="${basePath}/assets/Icons/monitor.png" alt="Home" style="width: 24px; height: 24px;"/>
                </a>
            `;

  let accumulatedPath = basePath;

  // Generate breadcrumb segments
  pathArray.forEach((segment, index) => {
    // Add arrow before each segment (except first one which is handled by home icon)
    breadcrumbHTML += `<img src="${basePath}/assets/Icons/arrow_right.png" alt="→" style="width: 16px; height: 16px; margin: 0 10px;" />`;

    accumulatedPath += `/${segment}`;
    const isLast = index === pathArray.length - 1;

    if (!isLast) {
      breadcrumbHTML += `<a href="${accumulatedPath}">${decodeURIComponent(
        segment
      )}</a>`;
    } else {
      // For the last segment, remove .html if present
      const displayName = segment.replace(/\.(html|php|aspx)$/i, "");
      breadcrumbHTML += `<span>${decodeURIComponent(displayName)}</span>`;
    }
  });

  breadCrumbContainer.innerHTML = breadcrumbHTML;
}

document.addEventListener("DOMContentLoaded", generateBreadCrumb);
