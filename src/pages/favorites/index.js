import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import FavoriteItem from './components/FavoriteItem';

export default class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  state = {
    favorites: [
      {
        id: 12256376,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjI1NjM3Ng==',
        name: 'ionic',
        full_name: 'ionic-team/ionic',
        private: false,
        owner: {
          login: 'ionic-team',
          id: 3171503,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxNzE1MDM=',
          avatar_url: 'https://avatars0.githubusercontent.com/u/3171503?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ionic-team',
          html_url: 'https://github.com/ionic-team',
          followers_url: 'https://api.github.com/users/ionic-team/followers',
          following_url: 'https://api.github.com/users/ionic-team/following{/other_user}',
          gists_url: 'https://api.github.com/users/ionic-team/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ionic-team/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ionic-team/subscriptions',
          organizations_url: 'https://api.github.com/users/ionic-team/orgs',
          repos_url: 'https://api.github.com/users/ionic-team/repos',
          events_url: 'https://api.github.com/users/ionic-team/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ionic-team/received_events',
          type: 'Organization',
          site_admin: false,
        },
        html_url: 'https://github.com/ionic-team/ionic',
        description:
          'Build amazing native and progressive web apps with open web technologies. One app running on everything 🎉',
        fork: false,
        url: 'https://api.github.com/repos/ionic-team/ionic',
        forks_url: 'https://api.github.com/repos/ionic-team/ionic/forks',
        keys_url: 'https://api.github.com/repos/ionic-team/ionic/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/ionic-team/ionic/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/ionic-team/ionic/teams',
        hooks_url: 'https://api.github.com/repos/ionic-team/ionic/hooks',
        issue_events_url: 'https://api.github.com/repos/ionic-team/ionic/issues/events{/number}',
        events_url: 'https://api.github.com/repos/ionic-team/ionic/events',
        assignees_url: 'https://api.github.com/repos/ionic-team/ionic/assignees{/user}',
        branches_url: 'https://api.github.com/repos/ionic-team/ionic/branches{/branch}',
        tags_url: 'https://api.github.com/repos/ionic-team/ionic/tags',
        blobs_url: 'https://api.github.com/repos/ionic-team/ionic/git/blobs{/sha}',
        git_tags_url: 'https://api.github.com/repos/ionic-team/ionic/git/tags{/sha}',
        git_refs_url: 'https://api.github.com/repos/ionic-team/ionic/git/refs{/sha}',
        trees_url: 'https://api.github.com/repos/ionic-team/ionic/git/trees{/sha}',
        statuses_url: 'https://api.github.com/repos/ionic-team/ionic/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/ionic-team/ionic/languages',
        stargazers_url: 'https://api.github.com/repos/ionic-team/ionic/stargazers',
        contributors_url: 'https://api.github.com/repos/ionic-team/ionic/contributors',
        subscribers_url: 'https://api.github.com/repos/ionic-team/ionic/subscribers',
        subscription_url: 'https://api.github.com/repos/ionic-team/ionic/subscription',
        commits_url: 'https://api.github.com/repos/ionic-team/ionic/commits{/sha}',
        git_commits_url: 'https://api.github.com/repos/ionic-team/ionic/git/commits{/sha}',
        comments_url: 'https://api.github.com/repos/ionic-team/ionic/comments{/number}',
        issue_comment_url: 'https://api.github.com/repos/ionic-team/ionic/issues/comments{/number}',
        contents_url: 'https://api.github.com/repos/ionic-team/ionic/contents/{+path}',
        compare_url: 'https://api.github.com/repos/ionic-team/ionic/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/ionic-team/ionic/merges',
        archive_url: 'https://api.github.com/repos/ionic-team/ionic/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/ionic-team/ionic/downloads',
        issues_url: 'https://api.github.com/repos/ionic-team/ionic/issues{/number}',
        pulls_url: 'https://api.github.com/repos/ionic-team/ionic/pulls{/number}',
        milestones_url: 'https://api.github.com/repos/ionic-team/ionic/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/ionic-team/ionic/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/ionic-team/ionic/labels{/name}',
        releases_url: 'https://api.github.com/repos/ionic-team/ionic/releases{/id}',
        deployments_url: 'https://api.github.com/repos/ionic-team/ionic/deployments',
        created_at: '2013-08-20T23:06:02Z',
        updated_at: '2019-01-22T17:56:40Z',
        pushed_at: '2019-01-22T17:48:31Z',
        git_url: 'git://github.com/ionic-team/ionic.git',
        ssh_url: 'git@github.com:ionic-team/ionic.git',
        clone_url: 'https://github.com/ionic-team/ionic.git',
        svn_url: 'https://github.com/ionic-team/ionic',
        homepage: 'https://ionicframework.com/',
        size: 92980,
        stargazers_count: 36562,
        watchers_count: 36562,
        language: 'HTML',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 12785,
        mirror_url: null,
        archived: false,
        open_issues_count: 321,
        license: {
          key: 'other',
          name: 'Other',
          spdx_id: 'NOASSERTION',
          url: null,
          node_id: 'MDc6TGljZW5zZTA=',
        },
        forks: 12785,
        open_issues: 321,
        watchers: 36562,
        default_branch: 'master',
        organization: {
          login: 'ionic-team',
          id: 3171503,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjMxNzE1MDM=',
          avatar_url: 'https://avatars0.githubusercontent.com/u/3171503?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/ionic-team',
          html_url: 'https://github.com/ionic-team',
          followers_url: 'https://api.github.com/users/ionic-team/followers',
          following_url: 'https://api.github.com/users/ionic-team/following{/other_user}',
          gists_url: 'https://api.github.com/users/ionic-team/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/ionic-team/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/ionic-team/subscriptions',
          organizations_url: 'https://api.github.com/users/ionic-team/orgs',
          repos_url: 'https://api.github.com/users/ionic-team/repos',
          events_url: 'https://api.github.com/users/ionic-team/events{/privacy}',
          received_events_url: 'https://api.github.com/users/ionic-team/received_events',
          type: 'Organization',
          site_admin: false,
        },
        network_count: 12785,
        subscribers_count: 1913,
      },
    ],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.state.favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado!</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
