import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  description:{ type: String, required: true },
  price:      { type: String, required: true },
  image:      { type: String }
});

const categorySchema = new mongoose.Schema({
  description: { type: String, required: true },
  products:    [productSchema]
});

const testimonialSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  content: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
  email:    { type: String, required: true },
  phone:    { type: String, required: true },
  address:  { type: String, required: true },
  socialMedia: {
    instagram: { type: String },
    facebook:  { type: String }
  }
});

const aboutSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  content: { type: String, required: true }
});

const websiteSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  vision:       { type: String, required: true },
  targetMarkets:[{ type: String, required: true }],
  categories: {
    Keychains:   categorySchema,
    Keepsakes:   categorySchema,
    MemorialItems: categorySchema
  },
  aboutUs:  aboutSchema,
  contact:  contactSchema,
  testimonials: [testimonialSchema]
});

export default mongoose.models.Website || mongoose.model('Website', websiteSchema);
