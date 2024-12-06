import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'shadcn-ui';

    export default function Projects() {
      return (
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>Description of project 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about project 1</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>Description of project 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about project 2</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>Description of project 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More details about project 3</p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
