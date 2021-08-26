import slider from './slider'

export default {
  title: 'Slider',
  components: { slider }
}

export const content = () => ({
  components: { slider },
  template: `<slider>
    <template #content>
      <img src="https://picsum.photos/320/240" />
      <p>The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
      <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
    </template>
  </slider>`
})

content.story = {
  name: 'Default view'
}
