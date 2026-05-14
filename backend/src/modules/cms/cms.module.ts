import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // SEO
      require('./seo/seo_metadata.entity').SeoMetadataEntity,
      require('./seo/seo_redirect.entity').SeoRedirectEntity,
      require('./blog/blog_post.entity').BlogPostEntity,
    ]),
  ],
})
export class CmsModule {}
