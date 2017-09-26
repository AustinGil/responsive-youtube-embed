import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'responsive-youtube-embed',
  styleUrl: 'responsive-youtube-embed.scss'
})
export class ResponsiveYoutubeEmbed {

  @Prop() youtubeId: string;
  @Prop() showSuggestedVideos: boolean;
  @Prop() showPlayerControls: boolean;
  @Prop() showTitleAndActions: boolean;
  @Prop() enablePrivacyMode: boolean;
  @Prop() startAt: number;

  render() {
    if (!this.youtubeId) return;

    let url;

    if (this.enablePrivacyMode == true) {
      url = "https://www.youtube-nocookie.com/embed/";
    } else {
      url = "https://www.youtube.com/embed/";
    }

    url += this.youtubeId + "?";

    if (this.showSuggestedVideos == false) {
      url += "&amp;rel=0";
    }

    if (this.showPlayerControls == false) {
      url += "&amp;controls=0";
    }

    if (this.showTitleAndActions == false) {
      url += "&amp;showinfo=0";
    }

    return (
      <iframe width="560" height="315" src={url} frameborder="0"></iframe>
    );
  }
}
