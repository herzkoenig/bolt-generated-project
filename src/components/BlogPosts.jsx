import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'shadcn-ui';

    export default function BlogPosts() {
      return (
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Blog Post 1</CardTitle>
                <CardDescription>Description of blog post 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about blog post 1</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blog Post 2</CardTitle>
                <CardDescription>Description of blog post 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about blog post 2</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blog Post 3</CardTitle>
                <CardDescription>Description of blog post 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about blog post 3</p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
