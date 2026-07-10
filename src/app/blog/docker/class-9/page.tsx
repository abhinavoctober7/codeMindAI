import DockerLessonLayout from "@/components/DockerLessonLayout";

export default function DockerClass9() {
  return (
    <DockerLessonLayout slug="class-9">
      {/* Title */}
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#2496ed] font-semibold uppercase tracking-widest">Class 9 — Deploy on AWS · Part 2</p>
        <h1 className="text-3xl font-bold text-white">Deploying to AWS — Part 2</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The image is in ECR. Now we run it on a real server: launch an <span className="text-white font-medium">
          EC2</span> instance, install Docker, pull the image, and expose it to the internet.
        </p>
      </div>

      {/* 9.1 Launch EC2 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.1 Launch an EC2 Instance</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white font-medium">EC2</span> is AWS&apos;s virtual server service. Launch an instance
          to act as the host machine that runs your container.
        </p>
        <div className="flex flex-col gap-2">
          {[
            { t: "AMI", d: "Choose Amazon Linux 2023 (or Ubuntu) as the operating system." },
            { t: "Instance type", d: "t2.micro / t3.micro is free-tier eligible and fine for a small app." },
            { t: "Key pair", d: "Create/download a .pem key so you can SSH in." },
            { t: "Security group", d: "Open port 22 (SSH) and your app's port (e.g. 5000 or 80) to inbound traffic." },
          ].map(({ t, d }) => (
            <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-sm font-semibold text-white">{t}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-widest">Don&apos;t forget</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            If the security group doesn&apos;t allow inbound traffic on your app&apos;s port, the container will run
            but nobody can reach it. This is the #1 &quot;it&apos;s running but I can&apos;t open it&quot; mistake.
          </p>
        </div>
      </div>

      {/* 9.2 Install Docker */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.2 SSH In &amp; Install Docker</h2>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# from your laptop
ssh -i mykey.pem ec2-user@<EC2_PUBLIC_IP>

# on the server (Amazon Linux)
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user   # run docker without sudo (re-login after)`}</code></pre>
        </div>
      </div>

      {/* 9.3 Pull from ECR */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.3 Authenticate &amp; Pull from ECR</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The EC2 instance needs permission to read ECR — attach an <span className="text-white font-medium">IAM
          role</span> with ECR read access to the instance (cleaner than storing keys). Then authenticate and pull.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# install the AWS CLI if needed, then:
aws ecr get-login-password --region ap-south-1 \\
  | docker login --username AWS \\
    --password-stdin 123456789012.dkr.ecr.ap-south-1.amazonaws.com

docker pull 123456789012.dkr.ecr.ap-south-1.amazonaws.com/myapp:latest`}</code></pre>
        </div>
      </div>

      {/* 9.4 Run */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.4 Run the Container</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Run detached, map the port, and use <code className="text-[#2496ed]">--restart</code> so it comes back up
          after a crash or reboot.
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`docker run -d \\
  --restart unless-stopped \\
  -p 80:5000 \\
  123456789012.dkr.ecr.ap-south-1.amazonaws.com/myapp:latest

# now visit http://<EC2_PUBLIC_IP> in a browser`}</code></pre>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Mapping host port <code className="text-[#2496ed]">80</code> to the app&apos;s container port means users
          reach it at the plain public IP with no port suffix. Your app is now live on the internet.
        </p>
      </div>

      {/* 9.5 Updating */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">9.5 Shipping an Update</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The redeploy loop once everything is wired up:
        </p>
        <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4 overflow-x-auto">
          <pre className="text-xs leading-relaxed text-gray-300"><code>{`# local: rebuild & push new image
docker build -t myapp . && docker tag ... && docker push ...

# server: pull & restart
docker pull ...myapp:latest
docker stop <old> && docker rm <old>
docker run -d --restart unless-stopped -p 80:5000 ...myapp:latest`}</code></pre>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ol className="flex flex-col gap-2">
          {[
            "EC2 is the virtual server that hosts your container; open the app's port in its security group.",
            "SSH in, install Docker, and start the Docker service on the instance.",
            "Give the instance ECR access via an IAM role, then authenticate and docker pull the image.",
            "Run detached with -p and --restart unless-stopped so the app survives reboots.",
            "Map host port 80 to serve on the plain public IP; redeploy by pulling and restarting.",
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
