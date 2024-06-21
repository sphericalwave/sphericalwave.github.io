# module Jekyll
#   class TagPageGenerator < Generator
#     safe true

#     def generate(site)
#       site.tags.each do |tag, posts|
#         site.pages << TagPage.new(site, site.source, tag, posts)
#       end
#     end
#   end

#   class TagPage < Page
#     def initialize(site, base, tag, posts)
#       @site = site
#       @base = base
#       @dir = File.join('tag', tag)
#       @name = 'index.html'

#       self.process(@name)
#       self.read_yaml(File.join(base, '_layouts'), 'tag.html')
#       self.data['tag'] = tag
#       self.data['title'] = "Posts tagged with '#{tag}'"
#     end
#   end
# end

Jekyll::Hooks.register :site, :post_read do |site|
    site.tags.each do |tag, posts|
      tag_dir = File.join('tag', tag)
      FileUtils.mkdir_p(tag_dir)
      File.open(File.join(tag_dir, 'index.html'), 'w') do |file|
        file.write <<~HTML
          ---
          layout: tag
          tag: #{tag}
          ---
        HTML
      end
    end
  end