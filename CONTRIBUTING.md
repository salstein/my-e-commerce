# Contributing to BookStore

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of this community. Here are a few guidelines that will help you along the way.

## Summary

- [Your first Pull Request](#your-first-pull-request)
- [Sending a Pull Request](#sending-a-pull-request)
  - [How to increase the chance of being accepted?](#how-to-increase-the-chance-of-being-accepted)
- [License](#license)


## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/salstein/my-e-commerce/issues?q=is:open+is:issue+label:"good+first+issue") that contain changes that have a relatively limited scope. This label means that there is already a working solution to the issue in the discussion section. Therefore, it is a great place to get started.

We also have a list of [good to take issues](https://github.com/salstein/my-e-commerce/issues?q=is:open+is:issue+label:"good+to+take"). This label is set when there has already been some discussion about the solution, and it is clear in which direction to go. These issues are good for developers that want to reduce the chance of going down a rabbit hole.

You can also work on any other issue you choose to.
The "good first" and "good to take" issues are just issues where we have a clear picture about scope and timeline.
Pull requests working on other issues or completely new problems may take a bit longer to review when they don't fit into our current development cycle.

If you decide to fix an issue, please make sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it, so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than a week, it's fine to take it over, but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Sending a Pull Request

This E-Commerce project is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```bash
git clone https://github.com/<your username>/my-e-commerce.git
cd my-e-commerce
git remote add upstream https://github.com/salstein/my-e-commerce.git
```

<!-- #default-branch-switch -->

3. Synchronize your local `main` branch with the upstream one:

```bash
git checkout main
git pull upstream main
```

4. Create a new topic branch:

```bash
git checkout -b my-topic-branch
```

5. Make changes, commit and push to your fork:

```bash
git push -u origin HEAD
```

6. Go to [the repository](https://github.com/salstein/my-e-commerce) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### How to increase the chance of being accepted?

Continuous Integration (CI) runs a series of checks automatically when a Pull Request is opened. If you're
unsure if your changes will pass, you can always open a Pull Request, and the GitHub UI will display a summary
of the results. Make sure the branch is not behind its target branch.

## License

By contributing your code to the [BookStore](https://github.com/salstein/my-e-commerce) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).