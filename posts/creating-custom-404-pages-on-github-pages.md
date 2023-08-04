Title: Creating Custom 404 Pages on GitHub Pages

Introduction:
GitHub Pages provides a convenient way to showcase your projects, personal website, or portfolio. While it's essential to have well-designed and functional pages, it's equally important to provide a user-friendly experience when visitors encounter a non-existent page. In this article, we'll walk you through the process of creating custom 404 pages on GitHub Pages, ensuring that even error pages leave a positive impression.

### Prerequisites:
Before you start, ensure you have the following:

1. A GitHub account
2. A GitHub repository where you want to host your custom 404 page
3. Basic knowledge of HTML and Git

### Steps to Create Custom 404 Pages:

#### Step 1: Create Your Custom 404 Page
1. Open a text editor or integrated development environment (IDE).
2. Create a new HTML file named `404.html`. This will serve as your custom 404 page.
3. Add the content you want to display on your error page. This could include a message, links to other pages, or a search bar.
4. Style your `404.html` page using CSS to make it visually appealing and consistent with your site's design.

#### Step 2: Upload Files to Your GitHub Repository
1. Open your GitHub repository on the GitHub website.
2. Click on the "Add file" button and choose "Upload files."
3. Upload your `404.html` file and any associated CSS files or assets.
4. Optionally, create a `.nojekyll` file in the repository root to prevent Jekyll processing.

#### Step 3: Commit and Push Changes
1. Add a commit message describing the changes you made (e.g., "Added custom 404 page").
2. Commit the changes to your preferred branch (usually `main` or `master`).
3. Push the changes to your GitHub repository.

#### Step 4: Configure GitHub Pages Settings
1. In your GitHub repository, navigate to the "Settings" tab.
2. Scroll down to the "GitHub Pages" section.
3. In the "Source" dropdown, select the branch containing your custom 404 page (e.g., `main`).
4. Click "Save."

#### Step 5: Verify Your Custom 404 Page
1. Wait a few minutes for GitHub Pages to update.
2. Open a web browser and navigate to your GitHub Pages website (usually `https://<username>.github.io/<repository>`).
3. Try accessing a non-existent page, such as `https://<username>.github.io/<repository>/nonexistent`.
4. You should now see your custom 404 page displayed.

### Conclusion:
Creating a custom 404 page on GitHub Pages enhances the user experience by providing helpful information and navigation options when visitors encounter an error. By following the steps outlined in this article, you can easily create and deploy a custom 404 page that aligns with your site's design and content. This small but thoughtful touch can contribute to a more professional and user-friendly GitHub Pages website.