import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass8() {
  return (
    <DockerLessonLayout slug="class-8">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 8 — Deploy on AWS · Part 1</p>
        <h1 className="text-3xl font-bold text-white">Deploying to AWS — Part 1</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          So far our images have lived on Docker Hub and run locally. Now we take a containerized app to the cloud.
          Part 1 covers the <span className="text-white font-medium">registry side</span>: building your image and
          pushing it to <span className="text-white font-medium">Amazon ECR</span>. Part 2 runs it on a server.
        </p>
      </div>

      {/* 8.1 The plan */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.1 The Deployment Plan</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The same <span className="text-white font-medium">build → push → pull → run</span> loop from Class 2, but the
          registry is a private AWS one and the machine that runs it is a cloud server.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { n: "1", t: "Build the image", d: "Build your app image locally, exactly as before." },
            { n: "2", t: "Create an ECR repository", d: "A private registry in your AWS account to hold the image." },
            { n: "3", t: "Authenticate & push", d: "Log Docker in to ECR and push the tagged image (this class)." },
            { n: "4", t: "Run on EC2", d: "Launch a server, pull the image, and run the container (Part 2)." },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <span className="w-7 h-7 rounded-full bg-[#2496ed]/15 text-[#2496ed] text-sm flex items-center justify-center font-bold shrink-0">{n}</span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-white">{t}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8.2 What is ECR */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.2 What Is Amazon ECR?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Elastic Container Registry (ECR)</span> is AWS&apos;s managed Docker
          registry — Docker Hub&apos;s private, cloud-integrated cousin. It stores your images securely inside your AWS
          account and integrates cleanly with EC2, ECS, and other AWS services.
        </p>
      </div>

      {/* 8.3 Prereqs */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.3 Prerequisites</h2>
        <div className="flex flex-col gap-2">
          {[
            { t: "AWS account", d: "With permissions for ECR and EC2." },
            { t: "AWS CLI installed & configured", d: "Run aws configure with your access key, secret, and default region." },
            { t: "Docker installed locally", d: "To build and push the image." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`aws configure
# AWS Access Key ID:     ...
# AWS Secret Access Key: ...
# Default region name:   ap-south-1`}</code></pre>
        </div>
      </div>

      {/* 8.4 Create repo */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.4 Create an ECR Repository</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`aws ecr create-repository --repository-name myapp --region ap-south-1

# note the repositoryUri it returns, e.g.:
# 123456789012.dkr.ecr.ap-south-1.amazonaws.com/myapp`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          That <span className="text-white font-medium">repository URI</span> is the address you&apos;ll tag and push
          to. It encodes your account ID, region, and repo name.
        </p>
      </div>

      {/* 8.5 Auth, tag, push */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">8.5 Authenticate, Tag &amp; Push</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          ECR needs a token to authenticate Docker. Pipe the AWS CLI&apos;s token straight into
          <code className="text-[#2496ed]"> docker login</code>, then tag your local image with the repo URI and push.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# 1. build locally
docker build -t myapp .

# 2. authenticate Docker to ECR
aws ecr get-login-password --region ap-south-1 \\
  | docker login --username AWS \\
    --password-stdin 123456789012.dkr.ecr.ap-south-1.amazonaws.com

# 3. tag the local image with the ECR URI
docker tag myapp:latest \\
  123456789012.dkr.ecr.ap-south-1.amazonaws.com/myapp:latest

# 4. push
docker push 123456789012.dkr.ecr.ap-south-1.amazonaws.com/myapp:latest`}</code></pre>
        </div>
        <div className="bg-[#2496ed]/10 border border-[#2496ed]/30 rounded-xl p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            The image now sits in ECR, ready for any AWS compute to pull. In <span className="text-white font-medium">
            Part 2</span> we launch an EC2 server, pull this image, and run it as a live container.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "Cloud deployment is the same build → push → pull → run loop, with a cloud registry and server.",
            "Amazon ECR is AWS's private, managed Docker registry.",
            "Configure the AWS CLI (aws configure) and create a repo with aws ecr create-repository.",
            "Authenticate Docker to ECR by piping aws ecr get-login-password into docker login.",
            "Tag your local image with the repository URI, then docker push it to ECR.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2496ed]/20 text-[#2496ed] text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </DockerLessonLayout>
  );
}
